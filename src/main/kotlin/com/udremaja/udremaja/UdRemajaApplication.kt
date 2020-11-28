package com.udremaja.udremaja

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.domain.AuditorAware
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.transaction.annotation.EnableTransactionManagement
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import java.util.*

@SpringBootApplication(exclude=[org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration::class])
@EnableJpaRepositories
@EnableJpaAuditing
@EnableTransactionManagement
@EnableWebMvc
class UdRemajaApplication: WebMvcConfigurer {

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/*").addResourceLocations("classpath:/static/")
    }

    @Bean
    fun auditorAware(): AuditorAware<String> = AuditorAware { Optional.of("temp user") }
}

fun main(args: Array<String>) {
    runApplication<UdRemajaApplication>(*args)
}

