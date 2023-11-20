const baseUrl = "http://localhost:3000";

module.exports = (app) => {
    app.get('/',function(req,res){
        res.send(`
            <html>
                <body>
                    <h1>Ultima School</h1>
                    <a href="${baseUrl}/alunos"> ir para alunos </a>
                </body>
            </html>
        `)
    });

    app.get('/alunos',function(req,res){
        res.send(`
        <html>
        <body>
            <h1>Lista de Alunos</h1>
            <table style="width: 300px;margin-bottom:100px">
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Matricula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="margin-right:100px">Ediane Peixoto de Oliveira</td>
                        <td>12412415135</td>
                    </tr> 
                    <tr>
                        <td style="margin-right:100px">João Marcos Alves de Aguiar</td>
                        <td>33412447518</td>
                    </tr>              
                </tbody>
            </table>
            <a href="${baseUrl}/"> ir para alunos </a>
        </body>
    </html>
        `)
    });
};