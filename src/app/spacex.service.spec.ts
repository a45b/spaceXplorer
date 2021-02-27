import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpacexService } from './spacex.service';
import { HttpClient } from '@angular/common/http';

describe('SpacexService', () => {
  let service: SpacexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexService, HttpClient]
    });
    service = TestBed.inject(SpacexService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
