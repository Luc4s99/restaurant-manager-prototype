package com.restaurante.servicoCatalogo.controllers;

import com.restaurante.servicoCatalogo.models.Produto;
import com.restaurante.servicoCatalogo.services.CatalogoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CatalogoController {

    private final CatalogoService catalogoService;

    public CatalogoController(CatalogoService catalogoService) {

        this.catalogoService = catalogoService;
    }

    @RequestMapping("/cardapio")
    @GetMapping
    public ResponseEntity<List<Produto>> getCatalogo() {

        return ResponseEntity.status(HttpStatus.OK).body(catalogoService.listarTodos());
    }

    @RequestMapping("/cardapio/novo")
    @PostMapping
    public ResponseEntity<Produto> saveCatalogo(@RequestBody Produto itemCatalogo) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(catalogoService.salvar(itemCatalogo));
    }

    @RequestMapping("/cardapio/excluir/{id}")
    @DeleteMapping
    public ResponseEntity<Void> deleteCatalogo(@PathVariable String id) {

        return catalogoService.listarPorId(id)
                        .map(registroEncontrado -> {
                            catalogoService.excluir(id);
                            return ResponseEntity.noContent().<Void>build();
                        })
                                .orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping("/cardapio/{id}")
    @GetMapping
    public ResponseEntity<Optional<Produto>> buscarPorId(@PathVariable String id) {

        return ResponseEntity.status(HttpStatus.OK)
                .body(catalogoService.listarPorId(id));
    }

    @RequestMapping("/cardapio/editar/{id}")
    @PutMapping
    public ResponseEntity<Produto> editarItem(@RequestBody Produto itemCatalogo) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(catalogoService.salvar(itemCatalogo));
    }
}
