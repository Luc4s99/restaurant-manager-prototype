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

                .route("rotaCatalogo", r -> r.path("/catalogo")
                        .uri("http://localhost:8083/"))

                .route("rotaCatalogoNovo", r -> r.path("/catalogo/novo")
                        .uri("http://localhost:8083/novo"))

                .build();
    }
}
