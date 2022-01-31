export class Coffee {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;

  constructor(
    id: number,
    uid: string,
    blend_name: string,
    origin: string,
    variety: string,
    notes: string,
    intensifier: string
  ) {
    this.id = id;
    this.uid = uid;
    this.blend_name = blend_name; //display
    this.origin = origin; //display
    this.variety = variety; //display
    this.notes = notes; //discribe
    this.intensifier = intensifier; //discribe
  }
}
