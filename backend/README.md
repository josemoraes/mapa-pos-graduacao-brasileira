# Endpoints

* POST /course > Adiciona um novo curso 
* GET /course?tags=x,y,z > Pesquisa pontos no mapa pelas tags

## Acesso ao banco
> User : course_user
> Pass : course_user
> Connection String : mongodb+srv://course_user:<password>@cluster0-zrvoa.mongodb.net/test?retryWrites=true&w=majority

## Estrutura de dados
```js
{
  "place_id": "ChIJ4UdkVlZD65QRVg2Zyg-Ae7g",
  "location": {
    "type":"Point",
		"coordinates":[
			-23.1862746,
    	-50.6573834
		]
  },
  "name": "Technological University of Parana",
  "formatted_address": "Av. João Miguel Caram, 3131 - Jardim Morumbi, Londrina - PR, 86036-370, Brazil",
  "formatted_phone_number": "(43) 3315-6100",
  "website": "http://www.utfpr.edu.br/londrina",
  "courses":["engenharia ambiental", "engenharia mecânica", "matemática"]
},
{
  "place_id": "ChIJHzFv8Bnf6pQR87Ahhg56Loo",
  "location": {
    "type":"Point",
		"coordinates":[
			-23.1862746,
    	-50.6573834
		]
  },
  "name": "Universidade Tecnológica Federal do Paraná",
  "formatted_address": "Av. Alberto Carazzai, 1640 - Vila Seugling, Cornélio Procópio - PR, 86300-000, Brazil",
  "formatted_phone_number": "(43) 3133-3700",
  "website": "http://portal.utfpr.edu.br/cornelioprocopio",
  "courses":["computação", "análise de sistemas", "engenharia elétrica", "matemática"]
}
```