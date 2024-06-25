import { CategoryRepository } from '@/repositories/CategoryRepository';
import { CategoryFilterDto } from '@/types/category/CategoryFilterDto';
import { CategoryResDto } from '@/types/category/CategoryResDto';
import { Space, Table, Tag } from 'antd';
import type { TablePaginationConfig, TableProps } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CustomeTable.module.scss';
const columns: TableProps<CategoryResDto>['columns'] = [
    {
        title: 'شناسه',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'عنوان',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'نشانی اینترنتی',
        dataIndex: 'slug',
        key: 'slug',
    },
    {
        title: 'عملیات',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link className='bg-yellow-400 p-2 text-white rounded-md' href={`/category/update/${record.id}`}> ویرایش</Link>
                <Link className='bg-red-400 p-2 text-white rounded-md' href={`/category/update/${record.id}`}> حذف</Link>
            </Space>
        ),
    },
];
const fetchData = async (filter: CategoryFilterDto, page: number, pageSize: number) => {
    let categoryRepo = new CategoryRepository('category');
    const response = await categoryRepo.GetPaginated(filter, page, pageSize);
    return response.data;
};
const CustomTable = () => {
    const [data, setData] = useState<CategoryResDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
        position: ['bottomRight'],
        pageSizeOptions: [10, 50, 100], defaultPageSize: 10,hideOnSinglePage:true,
       showPrevNextJumpers:true
    } as TablePaginationConfig);
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const result = await fetchData({ searchTerm: '' }, pagination.current as number, pagination.pageSize as number);
            setData(result.list);
            setPagination({
                ...pagination,
                total: result.totalCount,
            });
            setLoading(false);
        };

        loadData();
    }, [pagination.current, pagination.pageSize]);
    const handleTableChange = (pagination: any) => {
        setPagination(pagination);
    };
    const setRowClassName = (record:CategoryResDto,index:number) => {
        if (index % 2 === 0) {
          return styles['custom-row-even']; // Apply custom style for even rows
        }
        return styles['custom-row-odd']; // Apply custom style for odd rows
      };
    
    return (<>
        <Table pagination={pagination} loading={loading}
            columns={columns} dataSource={data} onChange={handleTableChange} rowClassName={setRowClassName}/>

    </>);
}

export default CustomTable;