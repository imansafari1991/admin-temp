import { CategoryCommand } from "@/types/category/CategoryCommand";
import { CrudRepository } from "./CrudRepository";
import { CategoryResDto } from "@/types/category/CategoryResDto";
import { CategoryFilterDto } from "@/types/category/CategoryFilterDto";

export class CategoryRepository extends CrudRepository<CategoryCommand, CategoryResDto, CategoryResDto, CategoryFilterDto> {

}