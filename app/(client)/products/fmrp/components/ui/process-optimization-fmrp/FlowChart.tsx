import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes: any[] = [
    { id: 'start', position: { x: 0, y: 0 }, data: { label: 'Bắt đầu' }, style: { width: 64, height: 64, backgroundColor: '#3276FA', color: '#fff', borderRadius: '50%' } },
    { id: 'kehoachsx', position: { x: 0, y: 100 }, data: { label: 'Kế hoạch sản xuất' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'kehoachNVL', position: { x: 200, y: 100 }, data: { label: 'Kế hoạch nguyên vật liệu' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'kiemtrakho', position: { x: 400, y: 100 }, data: { label: 'Kiểm tra tình trạng kho' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'decisionNVL', position: { x: 600, y: 100 }, data: { label: '' }, style: { backgroundColor: '#3276FA', width: 20, height: 20, rotate: 45 } },
    { id: 'sanxuat', position: { x: 800, y: 100 }, data: { label: 'Sản xuất' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'lenhsxtong', position: { x: 1000, y: 100 }, data: { label: 'Lệnh sản xuất tổng' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'lenhsxchitiet', position: { x: 1200, y: 100 }, data: { label: 'Lệnh sản xuất chi tiết' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'hoanthanhbtp', position: { x: 1200, y: 250 }, data: { label: 'Hoàn thành công đoạn bán thành phẩm' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'hoanthanhthanhpham', position: { x: 1200, y: 400 }, data: { label: 'Hoàn thành công đoạn thành phẩm' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'hoanthanhsx', position: { x: 1200, y: 550 }, data: { label: 'Hoàn thành sản xuất' }, style: { backgroundColor: '#E2F0FE' } },
    { id: 'end', position: { x: 1200, y: 700 }, data: { label: 'Kết thúc' }, style: { backgroundColor: '#3276FA', color: '#fff', borderRadius: '50%' } },
];

const edges = [
    { id: 'e1', source: 'start', target: 'kehoachsx' },
    { id: 'e2', source: 'kehoachsx', target: 'kehoachNVL' },
    { id: 'e3', source: 'kehoachNVL', target: 'kiemtrakho' },
    { id: 'e4', source: 'kiemtrakho', target: 'decisionNVL' },
    { id: 'e5', source: 'decisionNVL', target: 'sanxuat', label: 'Đủ kho NVL' },
    { id: 'e6', source: 'sanxuat', target: 'lenhsxtong' },
    { id: 'e7', source: 'lenhsxtong', target: 'lenhsxchitiet' },
    { id: 'e8', source: 'lenhsxchitiet', target: 'hoanthanhbtp' },
    { id: 'e9', source: 'hoanthanhbtp', target: 'hoanthanhthanhpham' },
    { id: 'e10', source: 'hoanthanhthanhpham', target: 'hoanthanhsx' },
    { id: 'e11', source: 'hoanthanhsx', target: 'end' },
];

const FlowChart = () => (
    <div className="w-full h-[600px] bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <ReactFlow nodes={nodes} edges={edges} fitView>
            <Controls />
            <Background />
        </ReactFlow>
    </div>
);

export default FlowChart;
