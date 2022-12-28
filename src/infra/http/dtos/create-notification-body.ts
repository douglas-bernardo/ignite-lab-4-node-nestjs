import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsNotEmpty()
  category: string;
}
