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
                .route("rotaCozinha", r -> r.path("/cozinha")
                    .uri("http://localhost:8081/"))

                .route("rotaPedido", r -> r.path("/pedido")
                        .uri("http://localhost:8082/"))

                //ROTAS CATÁLOGO
                .route("rotaCardapio", r -> r.path("/cardapio")
                        .uri("http://localhost:8083/"))

                .route("rotaCardapioNovo", r -> r.path("/cardapio/novo")
                        .uri("http://localhost:8083/novo"))

                .route("rotaRemoverItemCardapio", r -> r.path("/cardapio/**")
                        .filters(f -> f.rewritePath("cardapio/(?<id>.*)", "/cardapio/${id}"))
                        .uri("http://localhost:8083"))

                .route("rotaEditarItemCardapio", r -> r.path("/cardapio/novo/**")
                        .filters(f -> f.rewritePath("cardapio/novo/(?<id>.*)", "/cardapio/novo/${id}"))
                        .uri("http://localhost:8083"))

                .build();
    }
}
