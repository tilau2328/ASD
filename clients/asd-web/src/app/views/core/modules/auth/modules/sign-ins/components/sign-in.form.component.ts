import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignInService} from "../../../../../../../services/auth/sign-ins/sign-in.service";
import {CreateConnectionDto} from "../../../../../../../connectors/providers/connections/connection.dto";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in.form.component.html',
  styleUrls: ['./sign-in.form.component.css']
})
export class SignInFormComponent {
  credentialsForm: FormGroup;

  constructor(
    private signInService: SignInService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  async submit(): Promise<void> {
    if(this.credentialsForm.valid) {
      await this.signInService.signIn({ ...this.credentialsForm.getRawValue() });
    }
  }

  async onSuccess(connection: CreateConnectionDto): Promise<void> {
    await this.signInService.signIn({ connection });
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
