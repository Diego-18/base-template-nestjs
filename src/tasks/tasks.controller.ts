import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()                                    
    sayHello( ): string{
        return 'Hello World';                       
    }

    // Definir una ruta en el controlador mediante GET
    // @Get('/done')
    // saludar(name = "Diego", lastName = "Chavez"): string {
    //     return 'Hello ' + name + ' ' + lastName;
    // }

    @Get('/done')
    done(@Query() params: any): string {        // Recibe los parametros de la url mediante query
        const { framework } = params;
        console.log(params);
        return 'El nombre del framework usado es ' + framework;
    }

    @Get('/:id')                                        // Recibe un parametro de tipo string
    Identificacion( @Param('id') id: string ): string{  // Definir una variable de tipo string con el parametro id
        return 'Su cedula de identidad es ' + id;                       
    }

    @Post()
    create(@Body() data : any ){
        return data;
    }
}
