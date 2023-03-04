import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePasteDto } from './dtos/create-paste.dto';
import { UpdatePasteDto } from './dtos/update-paste.dto';
import { Paste } from './paste.entity';

@Injectable()
export class PastesService {
    constructor(
        @InjectRepository(Paste)
        private pasteRepository: Repository<Paste>,
    ) { }
    async findAll(): Promise<Paste[]> {
        return this.pasteRepository.find();
    }
    async findOne(id: number): Promise<Paste> {
        const paste = await this.pasteRepository.findOne({where: {id}});
        paste.views++;
        await this.pasteRepository.update(id, paste);
        return paste;
    }
    async create(paste: CreatePasteDto): Promise<Paste> {
        paste = {
            ...paste,
            views: 0,
        } as Paste;
        return this.pasteRepository.save(paste);
    }
    async update(id: number, paste: UpdatePasteDto): Promise<Paste> {
        await this.pasteRepository.update(id, paste);
        return this.pasteRepository.findOne({where: {id}});
    }
    async delete(id: number): Promise<Paste> {
        const paste = await this.pasteRepository.findOne({where: {id}});
        await this.pasteRepository.delete(id);
        return paste;
    }

}
