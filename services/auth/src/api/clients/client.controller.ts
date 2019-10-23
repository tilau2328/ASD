import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {ClientService} from "../../services/clients/client.service";
import {ClientDto, CreateClientDto, UpdateClientDto} from "../../services/clients/client.dto";

@Controller('clients')
export class ClientController {
    constructor(private clientService: ClientService) {}

    @Get()
    async listClients(): Promise<ClientDto[]> {
        return this.clientService.list();
    }

    @Get(':id')
    async clientDetails(@Param('id') id: string): Promise<ClientDto>  {
        return this.clientService.findById(id);
    }

    @Post()
    async createClient(@Body() createClientDto: CreateClientDto): Promise<ClientDto> {
        return this.clientService.create(createClientDto);
    }

    @Patch(':id')
    async updateClient(
        @Param('id') id: string,
        @Body() updateClientDto: UpdateClientDto,
    ): Promise<ClientDto> {
        return this.clientService.update(id, updateClientDto);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id: string): Promise<string> {
        return this.clientService.delete(id);
    }
}
