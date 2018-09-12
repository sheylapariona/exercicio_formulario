$(function() {
  var camposInvalidos = {};

  var informarCamposErrados= function() {
    var keys = Object.keys(camposInvalidos);

    for (i = 0; i < keys.length; i++) {
      var item = camposInvalidos[keys[i]];
      var prox = item.next();

      if (prox.is(".erroForm")) {
        prox.remove();
      }

      item.val('');
      $("<span class='erroForm "+item.attr('id') +"'>Preencha o campo</span>").insertAfter(item);
    }
  };


  var analisar = function() {
    var nome = $("#nome");
    var idade = $("#idade");
    var sexo = $("#sexo");
    var cidade = $("#cidade");
    var login = $("#login");
    var password = $("#password");
    var password2 = $("#password2");
    var email = $("#email");
    var v = true;
    var ret = true;

    camposInvalidos={};

    var validarSenha = function(campo) {
      if (campo.val() &&
          /[A-Z]/.test(campo.val()) &&
          /^[A-Za-z0-9]+$/.test(campo.val())) {
        return true;
      } else {
        return false;
      }
    };

    ret = (/^[A-Za-zç]+$/.test(nome.val()));
    if (!ret) {
      camposInvalidos[nome.attr("id")] = nome;
      if (v) {
        v = false;
      }
    }
    ret = (idade.val().length && idade.val()>0);
    if (!ret) {
      camposInvalidos[idade.attr("id")] = idade;
      if (v) {
        v = false;
      }
    }
    ret = (!!sexo.val());
    if (!ret) {
      camposInvalidos[sexo.attr("id")] = sexo;
      if (v) {
        v = false;
      }
    }
    ret = (!!cidade.val());
    if (!ret) {
      camposInvalidos[cidade.attr("id")] = cidade;
      if (v) {
        v = false;
      }
    }
    ret = (login.val().length >= 5 && (/^[A-Za-z0-9]+$/.test(login.val())));
    if (!ret) {
      camposInvalidos[login.attr("id")] = login;
      if (v) {
        v = false;
      }
    }
    ret = (validarSenha(password) && validarSenha(password2) && password.val() == password2.val());
    if (!ret) {
        camposInvalidos[password.attr("id")] = password;
        camposInvalidos[password2.attr("id")] = password2;
        if (v) {
          v = false;
        }
    }
    ret = (/^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email.val()));
    if (!ret) {
      camposInvalidos[email.attr("id")] = email;
      if (v) {
        v = false;
      }
    }

    return v;
  };

  $("#btnAnalisar").click(function(e) {
    e.preventDefault();
    var isValid = analisar();

    if (isValid) {
      alert(0 + " - OK");
    } else {
      alert(1 + " - preencha corretamente.");
    }
  });

  $("#btnEnviar").click(function(e) {
    e.preventDefault();

    if (analisar()) {
      var formContato = $(".formContato");

      alert("Formulário enviado com sucesso");
      formContato.find("FORM").hide();
      $("BODY").css("background-color", "rgba(159, 189, 31, 0.31)");
      formContato.text("Obrigado por criar uma conta. Aproveite o nosso serviço");
    } else {
      informarCamposErrados();
    }
  });

  $("input:not([type=radio]),select").change(function() {
    var prox = $(this).next();

    if (prox.is(".erroForm")) {
      prox.remove();
      if(!!camposInvalidos[$(this).attr("id")]) {
        delete camposInvalidos[$(this).attr("id")];
      }
    }
  })
});
