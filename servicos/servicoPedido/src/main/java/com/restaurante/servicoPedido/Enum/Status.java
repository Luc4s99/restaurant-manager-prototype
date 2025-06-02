package com.restaurante.servicoPedido.Enum;

import lombok.Getter;

public enum Status {

    FINALIZADO("Pronto"),
    EM_PREPARACAO("Em preparação"),
    AGUARDANDO_COZINHA("Aguardando confirmação da cozinha"),
    CANCELADO("Cancelado");

    @Getter
    private final String descricao;

    private Status(String descricao) {

        this.descricao = descricao;
    }
}
