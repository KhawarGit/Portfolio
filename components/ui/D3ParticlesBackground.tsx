"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Node extends d3.SimulationNodeDatum {
  x: number;
  y: number;
  fx?: number | null;
  fy?: number | null;
}

interface Link extends d3.SimulationLinkDatum<Node> {}

export default function D3ParticlesBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Increase/decrease this for more/less particles
    const nodeCount = 180;

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    const links: Link[] = [];

    // Random network
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() < 0.02) {
          links.push({
            source: nodes[i],
            target: nodes[j],
          });
        }
      }
    }

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    svg.attr("width", width).attr("height", height);

    const simulation = d3
      .forceSimulation<Node>(nodes)
      .force(
        "link",
        d3
          .forceLink<Node, Link>(links)
          .distance(120)
      )
      .force("charge", d3.forceManyBody().strength(-40))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#3b82f6")
      .attr("stroke-opacity", 0.35)
      .attr("stroke-width", 1);

    const circles = svg
      .append("g")
      .selectAll<SVGCircleElement, Node>("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 2.5)
      .attr("fill", "#3b82f6");

    const dragBehavior = d3
      .drag<SVGCircleElement, Node>()
      .on("start", (event, d) => {
        if (!event.active) {
          simulation.alphaTarget(0.3).restart();
        }

        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) {
          simulation.alphaTarget(0);
        }

        d.fx = null;
        d.fy = null;
      });

    circles.call(dragBehavior);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as Node).x)
        .attr("y1", (d) => (d.source as Node).y)
        .attr("x2", (d) => (d.target as Node).x)
        .attr("y2", (d) => (d.target as Node).y);

      circles
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);
    });

    const handleResize = () => {
      svg.attr("width", window.innerWidth);
      svg.attr("height", window.innerHeight);

      simulation.force(
        "center",
        d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)
      );

      simulation.alpha(0.5).restart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      simulation.stop();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 -z-10 h-screen w-screen"
      style={{ pointerEvents: "auto" }}
    />
  );
}