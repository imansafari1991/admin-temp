import { SampleCommand } from "@/types/sample/SampleCommand";
import { CrudRepository } from "./CrudRepository";
import { SampleResDto } from "@/types/sample/SampleResDto";
import { SampleDetailResDto } from "@/types/sample/SampleDetailResDto";
import { SampleFilterDto } from "@/types/sample/SampleFilterDto";

export class SampleRepository extends CrudRepository<SampleCommand, SampleResDto, SampleDetailResDto, SampleFilterDto> {

}