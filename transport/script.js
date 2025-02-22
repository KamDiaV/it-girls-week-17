const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
  },
  {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];

class Transport {
  constructor(type, brand, price, image) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }

  getInfo() {
    return `Тип: ${this.type}, Бренд: ${this.brand}`;
  }

  getPrice() {
    return `Цена: ${this.price.toLocaleString()} руб.`;
  }
}

class Car extends Transport {
  constructor(brand, price, doors, image) {
    super('car', brand, price, image);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Количество дверей: ${this.doors}`;
  }
}

class Bike extends Transport {
  constructor(brand, price, maxSpeed, image) {
    super('bike', brand, price, image);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed} км/ч`;
  }
}

const vehicles = data.map(item => {
  if (item.type === 'car') {
    return new Car(item.brand, item.price, item.doors, item.image);
  } else if (item.type === 'bike') {
    return new Bike(item.brand, item.price, item.maxSpeed, item.image);
  }
});

const container = document.getElementById('vehicle-container');
vehicles.forEach(vehicle => {
  const vehicleCard = document.createElement('div');
  vehicleCard.classList.add('vehicle-card');
  
  const img = document.createElement('img');
  img.src = vehicle.image;
  img.alt = vehicle.brand;

  const info = document.createElement('p');
  info.textContent = vehicle.getInfo();

  const price = document.createElement('p');
  price.textContent = vehicle.getPrice();

  vehicleCard.appendChild(img);
  vehicleCard.appendChild(info);
  vehicleCard.appendChild(price);
  
  if (vehicle instanceof Car) {
    const doors = document.createElement('p');
    doors.textContent = vehicle.getDoorsCount();
    vehicleCard.appendChild(doors);
  } else if (vehicle instanceof Bike) {
    const speed = document.createElement('p');
    speed.textContent = vehicle.getMaxSpeed();
    vehicleCard.appendChild(speed);
  }

  container.appendChild(vehicleCard);
});