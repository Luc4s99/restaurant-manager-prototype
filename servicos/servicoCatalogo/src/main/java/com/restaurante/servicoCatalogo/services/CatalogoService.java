package com.restaurante.servicoCatalogo.services;

import com.restaurante.servicoCatalogo.models.Produto;
import com.restaurante.servicoCatalogo.repositories.CatalogoRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CatalogoService {

    private CatalogoRepository catalogoRepository;

    public CatalogoService(CatalogoRepository catalogoRepository) {

        this.catalogoRepository = catalogoRepository;
    }

    @Transactional
    public Produto salvar(Produto catalogoModel) {

        return catalogoRepository.save(catalogoModel);
    }

    @Transactional(readOnly = true)
    public List<Produto> listarTodos() {

        return catalogoRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Produto> listarPorId(String id) {

        return catalogoRepository.findById(UUID.fromString(id));
    }

    @Transactional
    public void excluir(String id) {

        catalogoRepository.deleteById(UUID.fromString(id));
    }
}
