import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ) { }
  async create(createBookingDto: CreateBookingDto) {
    const booking = await this.bookingRepository.create(createBookingDto);
    return this.bookingRepository.save(booking);
  }

  findAll() {
    return this.bookingRepository.find();
  }

  findOne(id: number) {
    return this.bookingRepository.findOne({ where: { id } });
  }
  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.findOne({
      where: { id },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    Object.assign(booking, updateBookingDto);
    const updated = await this.bookingRepository.save(booking);
    return updated;
  }


  remove(id: number) {
    const booking  =this.bookingRepository.findOne({where: {id}});
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    const deleted = this.bookingRepository.delete(id);

    return "Booking deleted successfully";
  }
}
