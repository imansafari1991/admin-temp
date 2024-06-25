import { OperationResult } from "@/types/common/ApiResult";
import { PaginatedDto } from "@/types/common/PaginatedDto";
import { Delete, Get, Post, Put } from "@/utils/httpService";
const headers = new Headers({
    Accept: "text/plain",
});

export class CrudRepository<TCommand, TListResDto, TDetailResDto, TFilterDto> {
    private apiUrl: string;
    constructor(entityName: string) {
        this.apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/v1/${entityName}`
    }
    GetById(id: number)
        : Promise<OperationResult<TDetailResDto>> {
        return Get(`${this.apiUrl}?Id=${id}`);

    }
    Create(command: TCommand): Promise<OperationResult<number>> {
        return Post(this.apiUrl, JSON.stringify(command));
    }
    Update(command: TCommand)
        : Promise<OperationResult<boolean>> {
        headers.set("Content-Type", "application/json");
        return Put(this.apiUrl, JSON.stringify(command));
    }
    GetPaginated(filter: TFilterDto, page: number = 1, pageSize: number = 10)
        : Promise<OperationResult<PaginatedDto<TListResDto>>> {
        return Post(`${this.apiUrl}/GetPaginated`, JSON.stringify({ filter, page, pageSize }));

    }
    Delete(id: number)
        : Promise<OperationResult<number>> {
        return Delete(`${this.apiUrl}?id=${id}`);

    }
}