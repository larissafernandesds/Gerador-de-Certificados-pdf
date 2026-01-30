function criarDeclaracoesPDF() {
  // PLANILHA
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName('nomes'); // nome da aba

  // COLUNA A = nomes
  var nomes = aba.getRange('A1:A').getValues();

  // TEMPLATE
  var templateId = 'COLE_O_ID_DO_TEMPLATE_AQUI';
 
  // PASTA DESTINO
  var pastas = DriveApp.getFoldersByName('INSIRA_O_NOME_DA_PASTA_DESTINO');
  if (!pastas.hasNext()) {
    throw new Error('Pasta não encontrada no Drive.');
  }

  var pastaDestino = pastas.next();

  // LOOP para cada nome
  nomes.forEach(function(linha) {

    var nome = linha[0];
    if (nome === '') return;

    // criar cópia do template
    var copiaDoc = DriveApp.getFileById(templateId)
      .makeCopy('INSIRA_O_TITULO_DO_ARQUIVO - ' + nome, pastaDestino);

    // abrir a cópia
    var doc = DocumentApp.openById(copiaDoc.getId());
    var body = doc.getBody();

    // substituir a tag {{NOME}} pelo nome real
    body.replaceText('{{NOME}}', nome);
    doc.saveAndClose();

    // converter para PDF
    var pdfBlob = copiaDoc.getBlob().getAs('application/pdf');

    // salvar o PDF na pasta
    pastaDestino.createFile(pdfBlob)
      .setName('INSIRA_O_TITULO_DO_ARQUIVO - ' + nome + '.pdf');

    // apagar o arquivo Docs intermediário
    copiaDoc.setTrashed(true);

  });
}
