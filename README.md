# Paradigmas mobile: web x mobile na prática

**Aluno:** André Luiz Jesus Martins
**Disciplina:** Programação para Dispositivos Móveis

## 1. Fundamentação

### 1.1 Ciclo de build e distribuição

**Na web:** quando eu altero o código, faço o deploy no servidor e a mudança já fica no ar. Na próxima vez que o usuário abrir o site, ele vê a versão nova, sem precisar fazer nada. Se aparece um bug, eu corrijo e subo de novo em poucos minutos.

**No mobile:** o app fica instalado no celular do usuário, então não basta subir para um servidor. Primeiro eu gero o build, depois envio para a App Store e para a Play Store. Lá a Apple e o Google revisam o app, o que pode levar de horas a dias, e eles podem recusar a versão. Depois de aprovada, o usuário ainda precisa atualizar. Quem não atualiza continua com a versão antiga, inclusive com o bug. Por isso o servidor precisa continuar funcionando com versões antigas do app.