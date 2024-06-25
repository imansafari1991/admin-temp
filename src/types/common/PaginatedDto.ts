export interface PaginatedDto<TDto> {
    list: TDto[];
    page: number;
    pageSize: number;
    totalCount: number;
}