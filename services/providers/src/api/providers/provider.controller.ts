import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ProviderService} from "../../services/providers/provider.service";
import {CreateProviderDto, ProviderDto, UpdateProviderDto} from "../../services/providers/provider.dto";

@Controller('providers')
export class ProviderController {
    constructor(private providerService: ProviderService) {}

    @Get()
    async listProviders(): Promise<ProviderDto[]> {
        return this.providerService.list();
    }

    @Get(':id')
    async providerDetails(@Param('id') id: string): Promise<ProviderDto>  {
        return this.providerService.findById(id);
    }

    @Post()
    async createProvider(@Body() createProviderDto: CreateProviderDto): Promise<ProviderDto> {
        return this.providerService.create(createProviderDto);
    }

    @Patch(':id')
    async updateProvider(
        @Param('id') id: string,
        @Body() updateProviderDto: UpdateProviderDto,
    ): Promise<ProviderDto> {
        return this.providerService.update(id, updateProviderDto);
    }

    @Delete(':id')
    async deleteProvider(@Param('id') id: string): Promise<string> {
        return this.providerService.delete(id);
    }
}
