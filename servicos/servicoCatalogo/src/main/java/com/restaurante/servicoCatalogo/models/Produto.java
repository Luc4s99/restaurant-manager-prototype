package com.restaurante.servicoCatalogo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "CATALOGO")
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    @Column(name = "ID_PRODUTO")
    private UUID idProduto;

    @Getter @Setter
    @Column(name = "DESCRICAO")
    private String descricao;

    @Getter @Setter
    @Column(name = "PRECO_VENDA")
    private Double precoVenda;
}
