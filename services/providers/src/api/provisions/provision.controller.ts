import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ProvisionService} from "../../services/provisions/provision.service";
import {CreateProvisionDto, ProvisionDto, UpdateProvisionDto} from "../../services/provisions/provision.dto";

@Controller('provisions')
export class ProvisionController {
    constructor(private provisionService: ProvisionService) {}

    @Get()
    async listProvisions(): Promise<ProvisionDto[]> {
        return this.provisionService.list();
    }

    @Get(':id')
    async provisionDetails(@Param('id') id: string): Promise<ProvisionDto>  {
        return this.provisionService.findById(id);
    }

    @Post()
    async createProvision(@Body() createProvisionDto: CreateProvisionDto): Promise<ProvisionDto> {
        return this.provisionService.create(createProvisionDto);
    }

    @Patch(':id')
    async updateProvision(
        @Param('id') id: string,
        @Body() updateProvisionDto: UpdateProvisionDto,
    ): Promise<ProvisionDto> {
        return this.provisionService.update(id, updateProvisionDto);
    }

    @Delete(':id')
    async deleteProvision(@Param('id') id: string): Promise<string> {
        return this.provisionService.delete(id);
    }
}
