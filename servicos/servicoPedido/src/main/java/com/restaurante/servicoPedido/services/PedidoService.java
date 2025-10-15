package com.restaurante.servicoPedido.services;

import com.restaurante.servicoPedido.models.Pedido;
import com.restaurante.servicoPedido.models.PedidoItem;
import com.restaurante.servicoPedido.repositories.PedidoItemRepository;
import com.restaurante.servicoPedido.repositories.PedidoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PedidoService {

    private PedidoRepository pedidoRepository;
    private PedidoItemRepository pedidoItemRepository;

    public PedidoService(PedidoRepository pedidoRepository, PedidoItemRepository pedidoItemRepository) {

        this.pedidoRepository = pedidoRepository;
        this.pedidoItemRepository = pedidoItemRepository;
    }

    @Transactional(readOnly = true)
    public List<Pedido> listarTodos() {

        return pedidoRepository.findAll();
    }

    @Transactional
    public Optional<Pedido> listarPorId(String id) {

        return pedidoRepository.findById(UUID.fromString(id));
    }

    @Transactional
    public Pedido salvar(Pedido pedido) {

        return pedidoRepository.save(pedido);
    }

    public void salvarItensPedido(List<PedidoItem> itens) {

        pedidoItemRepository.saveAll(itens);
    }
}
