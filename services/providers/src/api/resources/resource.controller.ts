import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ResourceService} from "../../services/resources/resource.service";
import {CreateResourceDto, ResourceDto, UpdateResourceDto} from "../../services/resources/resource.dto";

@Controller('resources')
export class ResourceController {
    constructor(private resourceService: ResourceService) {}

    @Get()
    async listResources(@Param('providerId') provider: string): Promise<ResourceDto[]> {
        return this.resourceService.list({ provider });
    }

    @Get(':id')
    async resourceDetails(@Param('id') id: string): Promise<ResourceDto>  {
        return this.resourceService.findById(id);
    }

    @Post()
    async createResource(
        @Param('providerId') provider: string,
        @Body() createResourceDto: CreateResourceDto,
    ): Promise<ResourceDto> {
        return this.resourceService.create({ provider, ...createResourceDto });
    }

    @Patch()
    async updateResource(
        @Param('id') id: string,
        @Body() updateResourceDto: UpdateResourceDto,
    ): Promise<ResourceDto> {
        return this.resourceService.update(id, updateResourceDto);
    }

    @Delete(':id')
    async deleteResource(@Param('id') id: string): Promise<string> {
        return this.resourceService.delete(id);
    }
}
