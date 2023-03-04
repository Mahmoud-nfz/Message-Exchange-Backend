import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePasteDto {
    @IsOptional()
    title: string = 'Untitled';
    @IsNotEmpty()
    body: string;
    @IsOptional()
    language: string = 'text';
}