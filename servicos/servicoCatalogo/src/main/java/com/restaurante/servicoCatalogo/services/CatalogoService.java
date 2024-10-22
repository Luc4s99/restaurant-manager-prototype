package com.restaurante.servicoCatalogo.services;

import com.restaurante.servicoCatalogo.models.CatalogoModel;
import com.restaurante.servicoCatalogo.records.CatalogoRecord;
import com.restaurante.servicoCatalogo.repositories.CatalogoRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogoService {

    private CatalogoRepository catalogoRepository;

    public CatalogoService(CatalogoRepository catalogoRepository) {

        this.catalogoRepository = catalogoRepository;
    }

    @Transactional
    public CatalogoModel salvar(CatalogoModel catalogoModel) {

        return catalogoRepository.save(catalogoModel);
    }

    @Transactional(readOnly = true)
    public List<CatalogoModel> listarTodos() {

        return catalogoRepository.findAll();
    }
}
