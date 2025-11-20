"use client";

import React, { useEffect, useRef } from 'react';
import * as joint from 'jointjs';
import 'jointjs/dist/joint.css';

const ProcessManufacture = () => {
    const graphRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!graphRef.current) return;

        const namespace = joint.shapes;

        const graph = new joint.dia.Graph({}, { cellNamespace: namespace });

        const paper = new joint.dia.Paper({
            el: graphRef.current,
            model: graph,
            width: graphRef.current.clientWidth,
            height: graphRef.current.clientHeight,
            background: { color: 'transparent' },
            gridSize: 10,
            interactive: true,
            cellViewNamespace: namespace,
        });

        const defaultAttrs = {
            body: { rx: 8, ry: 8, fill: '#E2F0FE', stroke: '#3276FA', strokeWidth: 1 },
            label: { fill: '#11315B', fontSize: 14, fontWeight: 'normal' },
        };

        const elements = {
            start: new namespace.standard.Circle({
                position: { x: 10, y: 10 },
                size: { width: 60, height: 60 },
                attrs: {
                    body: { fill: '#3276FA', stroke: 'none' },
                    label: { text: 'Bắt đầu', fill: 'white', fontSize: 14, fontWeight: 'bold' },
                },
            }),
            sx: new namespace.standard.Rectangle({
                position: { x: 50, y: 150 },
                size: { width: 120, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Kế hoạch sản xuất', ...defaultAttrs.label } },
            }),
            khnv: new namespace.standard.Rectangle({
                position: { x: 250, y: 150 },
                size: { width: 160, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Kế hoạch nguyên vật liệu', ...defaultAttrs.label } },
            }),
            kiemtraKho: new namespace.standard.Rectangle({
                position: { x: 450, y: 150 },
                size: { width: 160, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Kiểm tra tình trạng kho', ...defaultAttrs.label } },
            }),
            decisionKho: new namespace.standard.Polygon({
                position: { x: 670, y: 145 },
                size: { width: 50, height: 50 },
                attrs: {
                    body: { refPoints: '25,0 50,25 25,50 0,25', fill: '#3276FA', stroke: 'none' },
                    label: { text: '', fill: '#FFF' },
                },
            }),
            sanXuat: new namespace.standard.Rectangle({
                position: { x: 750, y: 150 },
                size: { width: 120, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Sản xuất', ...defaultAttrs.label } },
            }),
            lenhSXTong: new namespace.standard.Rectangle({
                position: { x: 900, y: 150 },
                size: { width: 120, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Lệnh SX tổng', ...defaultAttrs.label } },
            }),
            lenhSXCT: new namespace.standard.Rectangle({
                position: { x: 1050, y: 150 },
                size: { width: 140, height: 40 },
                attrs: { ...defaultAttrs, label: { text: 'Lệnh SX chi tiết', ...defaultAttrs.label } },
            }),
            ketthuc: new namespace.standard.Circle({
                position: { x: 1050, y: 450 },
                size: { width: 60, height: 60 },
                attrs: {
                    body: { fill: '#3276FA', stroke: 'none' },
                    label: { text: 'Kết thúc', fill: 'white', fontSize: 14, fontWeight: 'bold' },
                },
            }),
        };

        const links = [
            new namespace.standard.Link({ source: elements.start, target: elements.sx }),
            new namespace.standard.Link({ source: elements.sx, target: elements.khnv }),
            new namespace.standard.Link({ source: elements.khnv, target: elements.kiemtraKho }),
            new namespace.standard.Link({ source: elements.kiemtraKho, target: elements.decisionKho }),
            new namespace.standard.Link({ source: elements.decisionKho, target: elements.sanXuat, labels: [{ attrs: { text: { text: 'Đủ kho NVL' } } }] }),
            new namespace.standard.Link({ source: elements.sanXuat, target: elements.lenhSXTong }),
            new namespace.standard.Link({ source: elements.lenhSXTong, target: elements.lenhSXCT }),
            new namespace.standard.Link({ source: elements.lenhSXCT, target: elements.ketthuc }),
        ];

        graph.addCells([...Object.values(elements), ...links]);

        const resizePaper = () => {
            paper.setDimensions(graphRef.current!.clientWidth, graphRef.current!.clientHeight);
        };

        window.addEventListener('resize', resizePaper);

        return () => {
            paper.remove();
            window.removeEventListener('resize', resizePaper);
        };

    }, []);

    return (
        <div
            className="w-full h-[600px] border border-[#D0D5DD] rounded-3xl p-4"
            style={{
                background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(204, 204, 204, 0.05) 0%, rgba(161, 161, 161, 0.1) 100.02%)",
                // boxShadow: "5px 5px 75px 0px #6C718080",
            }}
        >
            <div ref={graphRef} className="w-full h-full" />
        </div>
    );
};

export default ProcessManufacture;
