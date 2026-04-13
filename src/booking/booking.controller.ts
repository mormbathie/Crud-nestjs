import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    const booking = this.bookingService.create(createBookingDto);
    return booking;
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

@Patch(':id')
update(
  @Param('id') id: string,
  @Body() updateBookingDto: UpdateBookingDto,
) {
  console.log('BODY CONTROLLER:', updateBookingDto); // 👈 AJOUTE ÇA
  return this.bookingService.update(+id, updateBookingDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
