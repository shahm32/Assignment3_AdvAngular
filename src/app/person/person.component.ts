import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AuthService } from '../Services/auth.service';
import { PersonService } from '../Services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: any[] = [];
  isAdmin: boolean = false;

  constructor(private personService: PersonService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadPersons();
    this.isAdmin = this.authService.isInRole('admin');
  }

  loadPersons(): void {
    this.personService.getPersonList().subscribe(
      (data: any[]) => {
        console.log(data);  // Log the data to the console
        this.persons = data;
      },
      (error) => {
        console.error('Error fetching users:', error);  // Log any errors
      }
    );
  }
}
