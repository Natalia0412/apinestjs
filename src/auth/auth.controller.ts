import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user-decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authservice: AuthService,
  ) {}
  @Post('login')
  async login(@Body() { email, password }: AuthLoginDto) {
    return this.authservice.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return this.authservice.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDto) {
    return this.authservice.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDto) {
    return this.authservice.reset(password, token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@User('email') user) {
    return { user };
  }
}
