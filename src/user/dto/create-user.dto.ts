import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsInt()
    @IsOptional()
    id?: number;
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsBoolean()
    isActive: boolean;
}
