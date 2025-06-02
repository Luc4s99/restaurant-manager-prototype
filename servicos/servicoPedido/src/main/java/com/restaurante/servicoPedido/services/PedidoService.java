package com.restaurante.servicoPedido.services;

import com.restaurante.servicoPedido.models.Pedido;
import com.restaurante.servicoPedido.repositories.PedidoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PedidoService {

    private PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {

        this.pedidoRepository = pedidoRepository;
    }

    @Transactional
    public Pedido salvar(Pedido pedido) {

        return pedidoRepository.save(pedido);
    }
}
