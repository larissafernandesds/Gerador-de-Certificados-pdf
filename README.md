<h1 align="center">📄 Geração Automática de Declarações e Certificados em PDF</h1>

---

## 📝 Descrição do Projeto

Sistema de **automação para geração em massa de declarações e certificados em PDF**, utilizando **Google Apps Script**, integrado ao **Google Planilhas, Documentos e Drive**.

A partir de uma lista de nomes em uma planilha e de um documento modelo com a tag `{{NOME}}`, o script gera automaticamente um PDF individual para cada pessoa, em uma pasta específica.

---

## 🎯 Objetivo

Automatizar a criação de documentos oficiais, reduzindo trabalho manual, retrabalho e erros operacionais, permitindo reutilização do sistema em diferentes projetos, editais e eventos.

---

## ⚙️ Tecnologias Utilizadas

- **Google Apps Script (JavaScript)**
- **Google Planilhas**
- **Google Documentos**
- **Google Drive**

---

## 📂 Funcionamento Geral

- Lê os nomes da coluna **A** da aba `nomes`
- Cria uma cópia do documento modelo
- Substitui a tag `{{NOME}}` pelo nome da planilha
- Converte o documento em **PDF**
- Salva o PDF na pasta configurada no Drive
- Remove o arquivo intermediário do Google Docs

---

## 📘 Manual de Uso

Este repositório possui um **MANUAL completo**, contendo:
- Estudo de caso (Prêmio Maria Filina de Mérito Extensionista)
- Passo a passo de configuração
- Boas práticas de uso
- Solução de problemas
- Código neutro para reutilização em outros projetos

📄 Consulte o arquivo **MANUAL** para instruções detalhadas.

---

## 🏛️ Contexto de Aplicação

Projeto desenvolvido no âmbito da **PROEX – Pró-Reitoria de Extensão**, com aplicação inicial no **Prêmio Maria Filina de Mérito Extensionista**.

---

## 👩‍💻 Autoria

**Larissa Fernandes da Silva**  
Bolsista PROEX - UFES  
Ano: **2026**

Supervisão:  
**Jorge Luiz dos Santos Junior**  
Diretor de Política Extensionista - PROEX

---

## 📌 Observação

O sistema foi desenvolvido para fácil adaptação.  
Para reutilizar, basta alterar:
- Nome da aba da planilha  
- ID do documento modelo  
- Pasta de destino no Drive  
- Título dos arquivos gerados  

---
