import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateConnectionDto} from "../../../modules/providers/dto/connection.dto";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in.form.component.html',
  styleUrls: ['./sign-in.form.component.css']
})
export class SignInFormComponent {
  credentialsForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  async submit(): Promise<void> {
    if(this.credentialsForm.valid) {
      await this.authService.signIn({ ...this.credentialsForm.getRawValue() });
    }
  }

  async onSuccess(connection: CreateConnectionDto): Promise<void> {
    await this.authService.signIn({ connection });
  }

  private createForm() {
    this.credentialsForm = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      password: this.formBuilder.control('', [
        Validators.minLength(3),
        Validators.required,
      ]),
    });
  }
}
