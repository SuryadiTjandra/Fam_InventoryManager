package com.udremaja.udremaja.core.company

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class CompanyPageController {
    @RequestMapping("/companies")
    fun companyIndex(): String{
        return "company"
    }
}