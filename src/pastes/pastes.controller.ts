import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePasteDto } from './dtos/create-paste.dto';
import { UpdatePasteDto } from './dtos/update-paste.dto';
import { PastesService } from './pastes.service';

@Controller('pastes')
export class PastesController {
    constructor(private readonly pastesService: PastesService) { }
    @Get('/')
    findAll() {
        return this.pastesService.findAll();
    }
    @Get('/:id')
    findOne(@Param('id') id: number) {
        return this.pastesService.findOne(id);
    }
    @Post('/')
    create(@Body() paste: CreatePasteDto) {
        return this.pastesService.create(paste);
    }
    @Post('/:id')
    update(@Param('id') id: number, @Body() paste: UpdatePasteDto) {
        return this.pastesService.update(id, paste);
    }
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.pastesService.delete(id);
    }
        
}
