import {Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {ConnectionService} from "../../services/connections/connection.service";
import {ConnectionDto, CreateConnectionDto} from "../../services/connections/connection.dto";

@Controller('connections')
export class ConnectionController {
    constructor(private readonly connectionService: ConnectionService) {}

    @Get()
    async listConnections(@Param('providerId') provider: string): Promise<ConnectionDto[]> {
        return this.connectionService.list({ provider });
    }

    @Get(':id')
    async connectionDetails(@Param('providerId') providerId: string,
                            @Param('id') id: string): Promise<ConnectionDto> {
        return this.connectionService.findById(id);
    }

    @Post()
    async createConnection(@Param('providerId') providerId: string, createConnectionDto: CreateConnectionDto) {
        return this.connectionService.create(createConnectionDto);
    }

    @Delete(':id')
    async deleteConnection(@Param('providerId') providerId: string, @Param('id') id: string) {
        return this.connectionService.delete(id);
    }
}
