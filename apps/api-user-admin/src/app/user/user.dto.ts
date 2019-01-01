import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  readonly id?: number;

  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly active: boolean;
}
