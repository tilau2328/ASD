import {Component} from '@angular/core';
import {AuthService} from "../../../modules/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateConnectionDto} from "../../../modules/providers/dto/connection.dto";
import {CreateSignUpDto} from "../../../modules/auth/dto/sign-up.dto";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up.form.component.html',
  styleUrls: ['./sign-up.form.component.css']
})
export class SignUpFormComponent {
  connections: CreateConnectionDto[];
  credentialsForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  async clearRegistration(): Promise<void> {
    this.credentialsForm.reset();
    this.saveState();
  }

  async submit(): Promise<void> {
    if (this.credentialsForm.valid) {
      await this.authService.signUp({
        ...this.credentialsForm.getRawValue(),
        connections: this.connections
      });
      clearSignUpState();
    }
  }

  private createForm() {
    const credentials: CreateSignUpDto = getSignUpState();
    this.credentialsForm = this.formBuilder.group({
      email: this.formBuilder.control(credentials ? credentials.email : '', [
        Validators.required
      ]),
      username: this.formBuilder.control(credentials ? credentials.username : '', [
        Validators.minLength(3),
        Validators.required,
      ]),
      password: this.formBuilder.control(credentials ? credentials.password : '', [
        Validators.minLength(3),
        Validators.required,
      ]),
    });
    this.connections = credentials && credentials.connections ? credentials.connections : [];
    console.log(this.connections);
    this.credentialsForm.valueChanges.subscribe(() => {
      this.saveState();
    });
  }

  isProviderConnected(provider: string): boolean {
    return this.getConnectionIndex(provider) > -1;
  }

  removeConnection(provider: string): void {
    const index: number = this.getConnectionIndex(provider);
    if (index > -1) {
      this.connections.splice(index, 1);
    }
    this.saveState();
  }

  addConnection(connection: CreateConnectionDto): void {
    console.log(connection);
    const index: number = this.getConnectionIndex(connection.provider);
    if (index > -1) {
      this.connections.splice(index, 1, connection);
    } else {
      this.connections.push(connection);
    }
    this.saveState();
  }

  private saveState(): void {
    setSignUpState({
      ...this.credentialsForm.getRawValue(),
      connections: this.connections
    });
  }

  private getConnectionIndex(provider: string) {
    return this.connections.findIndex((c: CreateConnectionDto) => c.provider === provider);
  }
}

const SIGN_UP_STATE: string = "SIGN_UP_STATE";

function clearSignUpState(): void {
  localStorage.removeItem(SIGN_UP_STATE);
}

function getSignUpState(): CreateSignUpDto {
  return JSON.parse(localStorage.getItem(SIGN_UP_STATE));
}

function setSignUpState(createSignUpDto: CreateSignUpDto): void {
  localStorage.setItem(SIGN_UP_STATE, JSON.stringify(createSignUpDto));
}
