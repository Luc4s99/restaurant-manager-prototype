package com.restaurante.gateway.configuration;

import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;

@Configuration
public class GatewayConfiguration {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {

        return builder.routes()

                //ROTAS COZINHA
                .route("rotaCozinha", r -> r.path("/cozinha")
                    .uri("http://localhost:8081/"))

                //ROTAS PEDIDO
                .route("rotaPedido", r -> r.path("/pedido")
                        .uri("http://localhost:8082/"))

                //ROTAS CATÁLOGO
                .route("rotaCardapio", r -> r.path("/cardapio")
                        .uri("http://localhost:8083/"))

                .route("rotaCardapioNovo", r -> r.path("/cardapio/novo")
                        .uri("http://localhost:8083/novo"))

                .route("rotaRemoverItemCardapio", r -> r.path("/cardapio/excluir/**")
                        .filters(f -> f.rewritePath("cardapio/excluir/(?<id>.*)", "/cardapio/excluir/${id}"))
                        .uri("http://localhost:8083"))

                .route("rotaEditarItemCardapio", r -> r.path("/cardapio/editar/**")
                        .filters(f -> f.rewritePath("cardapio/editar/(?<id>.*)", "/cardapio/editar/${id}"))
                        .uri("http://localhost:8083"))

                .route("rotaBuscarItem", r -> r.path("/cardapio/**")
                        .filters(f -> f.rewritePath("cardapio/(?<id>.*)", "/cardapio/${id}"))
                        .uri("http://localhost:8083"))

                .build();
    }
}
