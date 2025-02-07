const data = {
    "step1_data extration": {
        "CSHOQ": {
            "含义": "季度流通股数",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "fqtr": {
            "含义": "财务季度",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "mqtr": {
            "含义": "季度标识符",
            "公式": "mqtr = fyearq * 100 + fqtr * 25",
            "示例文件": "step1_data extration",
            "用到的变量": [
                "fyearq",
                "fqtr"
            ]
        },
        "PRCCQ": {
            "含义": "季度股票价格",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "ATQ": {
            "含义": "季度总资产",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "IBQ": {
            "含义": "季度净利润",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "SPIQ": {
            "含义": "季度特殊项目",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "DVPQ": {
            "含义": "季度股利支付",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "RECTQ": {
            "含义": "季度应收账款",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "INVTQ": {
            "含义": "季度存货",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "ACOQ": {
            "含义": "季度流动负债",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "APQ": {
            "含义": "季度应付账款",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "LCOQ": {
            "含义": "季度长期负债",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "DPQ": {
            "含义": "季度折旧",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "PPENTQ": {
            "含义": "季度固定资产",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "INTANQ": {
            "含义": "季度无形资产",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "ALTOQ": {
            "含义": "季度其他长期资产",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "LOQ": {
            "含义": "季度其他长期负债",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        },
        "CEQQ": {
            "含义": "季度普通股权益",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "step1_data extration"
        }
    },
    "code_control merge": {
        "gvkey": {
            "含义": "公司标识符",
            "数据库来源": [
                "srca.comp_crsp",
                "comp.funda",
                "comp.company "
            ],
            "示例文件": "code_control merge"
        },
        "fyearq": {
            "含义": "财务年度季度",
            "数据库来源": [
                "srca.comp_crsp"
            ],
            "示例文件": "code_control merge"
        },
        "datadate_1": {
            "含义": "股票数据日期",
            "数据库来源": [
                "srca.comp_crsp",
                "crsp.msf"
            ],
            "示例文件": "code_control merge"
        },
        "sales_q1": {
            "含义": "股票第一季度销售额",
            "数据库来源": [
                "srca.afevar"
            ],
            "示例文件": "code_control merge"
        },
        "sales_q2": {
            "含义": "股票第二季度销售额",
            "数据库来源": [
                "srca.afevar"
            ],
            "示例文件": "code_control merge"
        },
        "sales_q3": {
            "含义": "股票第三季度销售额",
            "数据库来源": [
                "srca.afevar"
            ],
            "示例文件": "code_control merge"
        },
        "sales_q4": {
            "含义": "股票第四季度销售额",
            "数据库来源": [
                "srca.afevar"
            ],
            "示例文件": "code_control merge"
        },
        "permno": {
            "含义": "CRSP 证券标识符",
            "数据库来源": [
                "srca.eptret",
                "crsp.ccmxpf_lnkhist",
                "crsp.msf"
            ],
            "示例文件": "code_control merge"
        },
        "dt_13f": {
            "含义": "13F 文件日期",
            "数据库来源": [
                "srca.inst_vars"
            ],
            "示例文件": "code_control merge"
        },
        "qcnt_8k": {
            "含义": "8K 文件数量",
            "数据库来源": [
                "srca.qcnt_8k"
            ],
            "示例文件": "code_control merge"
        },
        "qcnt_press": {
            "含义": "新闻发布数量",
            "数据库来源": [
                "srca.qcnt_press"
            ],
            "示例文件": "code_control merge"
        },
        "lgseg_1": {
            "含义": "第一大业务部门收入占比",
            "数据库来源": [
                "srca.lgseg"
            ],
            "示例文件": "code_control merge"
        },
        "lgseg_2": {
            "含义": "第二大业务部门收入占比",
            "数据库来源": [
                "srca.lgseg"
            ],
            "示例文件": "code_control merge"
        },
        "lgseg_3": {
            "含义": "第三大业务部门收入占比",
            "数据库来源": [
                "srca.lgseg"
            ],
            "示例文件": "code_control merge"
        },
        "investor_beg": {
            "含义": "股票期初投资者数量",
            "数据库来源": [
                "srca.investor"
            ],
            "示例文件": "code_control merge"
        },
        "investor_avg": {
            "含义": "股票平均投资者数量",
            "数据库来源": [
                "srca.investor"
            ],
            "示例文件": "code_control merge"
        },
        "investor_end": {
            "含义": "股票期末投资者数量",
            "数据库来源": [
                "srca.investor"
            ],
            "示例文件": "code_control merge"
        },
        "gvkey与permno对接表": {
            "含义": "两个标识符对接后的表",
            "公式": "",
            "示例文件": "code_control merge"
        }
    },
    "wrds studio_UD Law Dummy": {
        "state": {
            "含义": "公司所在州",
            "数据库来源": [
                "comp.company"
            ],
            "示例文件": "wrds studio_UD Law Dummy"
        },
        "d_udl": {
            "含义": "一致董事法虚拟变量",
            "公式": "如果 state 在特定列表中，则 d_udl = 1，否则 d_udl = 0",
            "示例文件": "wrds studio_UD Law Dummy",
            "用到的变量": [
                "state"
            ]
        }
    },
    "wrds studio code_litigation": {
        "datadate_2": {
            "含义": "数据日期（财务数据的报告日期）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "fyear": {
            "含义": "财务年度",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "at": {
            "含义": "总资产（Total Assets）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "sale": {
            "含义": "销售额（Sales）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "PRCC_C": {
            "含义": "公司股票的收盘价（Closing Price）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "PRCC_F": {
            "含义": "公司股票的最终价格（Final Price）",
            "数据库来源": [
                "comp.funda",
                "execcomp.codirfin"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "exchcd": {
            "含义": "交易所代码（Exchange Code），用于标识股票所在的交易所",
            "数据库来源": [
                "crsp.stocknames"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "sich": {
            "含义": "标准行业分类代码（Standard Industrial Classification Code）",
            "数据库来源": [
                "COMP.CO_INDUSTRY"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "ret": {
            "含义": "月度股票收益率（Return）",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "vol": {
            "含义": "交易量（Volume）",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "vwretd": {
            "含义": "市值加权市场收益率（Value-Weighted Market Return）",
            "数据库来源": [
                "crsp.msi"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "shrout": {
            "含义": "流通股数（Shares Outstanding）",
            "数据库来源": [
                "crsp.msf",
                "execcomp.codirfin"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "nameenddt": {
            "含义": "公司名称结束日期（Name End Date）",
            "数据库来源": [
                "crsp.stocknames"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "namedt": {
            "含义": "公司名称开始日期（Name Start Date）",
            "数据库来源": [
                "crsp.stocknames"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "salesgrowth": {
            "含义": "销售增长率，衡量公司成长性",
            "公式": "salesgrowth = (sale - sale_l1) / at_l1",
            "用到的变量": [
                "sale",
                "sale_l1",
                "at_l1"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "lg_ret": {
            "含义": "股票收益率的对数，用于计算累计收益率",
            "公式": "lg_ret = log(1 + ret)",
            "用到的变量": [
                "ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "lg_mkt_ret": {
            "含义": "市场收益率的对数，用于计算累计市场收益率",
            "公式": "lg_mkt_ret = log(1 + vwretd)",
            "用到的变量": [
                "vwretd"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "ret_adj": {
            "含义": "调整后的收益率，反映公司相对于市场的表现",
            "公式": "ret_adj = exp(sum_lg_ret) - exp(sum_lg_mkt_ret)",
            "用到的变量": [
                "sum_lg_ret",
                "sum_lg_mkt_ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "std_ret": {
            "含义": "收益率的标准差，衡量收益率的波动性",
            "公式": "std_ret = std(ret)",
            "用到的变量": [
                "ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "sum_lg_ret": {
            "含义": "对数收益率的累计值，用于计算调整后的收益率",
            "公式": "sum_lg_ret = sum(lg_ret)",
            "用到的变量": [
                "lg_ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "sum_lg_mkt_ret": {
            "含义": "对数市场收益率的累计值，用于计算调整后的收益率",
            "公式": "sum_lg_mkt_ret = sum(lg_mkt_ret)",
            "用到的变量": [
                "lg_mkt_ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "sum_vol": {
            "含义": "交易量的累计值，用于计算换手率",
            "公式": "sum_vol = sum(vol)",
            "用到的变量": [
                "vol"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "turn": {
            "含义": "换手率的中间计算结果，衡量股票的流动性",
            "公式": "turn = (sum_vol * 100) / (shrout_l1 * 1000)",
            "用到的变量": [
                "sum_vol",
                "shrout_l1"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "turnover": {
            "含义": "换手率，衡量股票的流动性",
            "公式": "turnover = turn（非纳斯达克股票）或 turnover = 0.5 * turn（1997 年前纳斯达克股票）或 turnover = 0.62 * turn（1997 年后纳斯达克股票）",
            "用到的变量": [
                "turn",
                "exchcd"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "ret_skewness": {
            "含义": "收益率的偏度，衡量收益率分布的不对称性",
            "公式": "ret_skewness = skewness(ret)",
            "用到的变量": [
                "ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "lnasset_l1": {
            "含义": "上一年的公司总资产的自然对数",
            "公式": "通过自连接获取上一年的 lnasset",
            "用到的变量": [
                "lnasset"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "salesgrowth_l1": {
            "含义": "上一年的销售增长率",
            "公式": "通过自连接获取上一年的 salesgrowth",
            "用到的变量": [
                "salesgrowth"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "ret_adj_l1": {
            "含义": "上一年的调整后的收益率",
            "公式": "通过自连接获取上一年的 ret_adj",
            "用到的变量": [
                "ret_adj"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "std_ret_l1": {
            "含义": "上一年的收益率标准差",
            "公式": "通过自连接获取上一年的 std_ret",
            "用到的变量": [
                "std_ret"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "turnover_l1": {
            "含义": "上一年的换手率",
            "公式": "通过自连接获取上一年的 turnover",
            "用到的变量": [
                "turnover"
            ],
            "示例文件": "wrds studio code_litigation"
        },
        "ret_skewness_l1": {
            "含义": "上一年的收益率偏度",
            "公式": "通过自连接获取上一年的 ret_skewness",
            "用到的变量": [
                "ret_skewness"
            ],
            "示例文件": "wrds studio code_litigation"
        }
    },
    "studio code_ycomp_crsp": {
        "sich2": {
            "含义": "标准行业分类代码的前两位",
            "公式": "sich2 = floor(sic_hd / 100)",
            "示例文件": "studio code_ycomp_crsp",
            "用到的变量": [
                "sich"
            ]
        }
    },
    "Wrds studio code_delta and vega": {
        "coperol": {
            "含义": "高管唯一标识符",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "execid": {
            "含义": "高管 ID",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "exec_fullname": {
            "含义": "高管全名",
            "数据库来源": [
                "execcomp.person"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "salary": {
            "含义": "高管基本工资",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "bonus": {
            "含义": "高管奖金",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "tdc1": {
            "含义": "高管总薪酬（包括期权和股票奖励）",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "option_awards_num": {
            "含义": "期权奖励数量",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "option_awards_blk_value": {
            "含义": "高管期权奖励的 Black-Scholes 价值",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "opts_vested_num": {
            "含义": "已归属期权数量",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "opts_unvested_num": {
            "含义": "未归属期权数量",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "opts_exercised_num": {
            "含义": "高管已行权期权数量",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "shrown": {
            "含义": "高管持有的股票数量",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "shrowntotal": {
            "含义": "高管持有的总股票数量（包括期权）",
            "数据库来源": [
                "execcomp.anncomp"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "divyield": {
            "含义": "股息收益率",
            "数据库来源": [
                "execcomp.codirfin"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "bs_volatility": {
            "含义": "股票价格的 Black-Scholes 波动率",
            "数据库来源": [
                "execcomp.codirfin"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "bs_yield": {
            "含义": "Black-Scholes 股息收益率",
            "数据库来源": [
                "execcomp.codirfin"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "rfc": {
            "含义": "无风险利率",
            "数据库来源": [
                "frb.rates_daily"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "fyenddt": {
            "含义": "财务年度结束日期",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "fyr": {
            "含义": "财务年度结束月份",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "exdate": {
            "含义": "期权到期日期",
            "数据库来源": [
                "execcomp.stgrttab"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "assumed_grantdate": {
            "含义": "假设的期权授予日期",
            "数据库来源": [
                "execcomp.stgrttab"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "mktpric": {
            "含义": "期权授予日的市场价格",
            "数据库来源": [
                "execcomp.stgrttab"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "numsecur": {
            "含义": "期权数量",
            "数据库来源": [
                "execcomp.stgrttab"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "CIK": {
            "含义": "公司中央索引键（SEC中的公司ID）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "rollingstd": {
            "含义": "股票收益率的滚动标准差（如以12个月为窗口）",
            "公式": "rollingstd = std(ret)",
            "用到的变量": [
                "ret"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "sigma": {
            "含义": "股票回报的年化波动率",
            "公式": "σ = rollingstd × √12",
            "用到的变量": [
                "rollingstd"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "sigmasq": {
            "含义": "股票回报波动率的平方",
            "公式": "sigmasq = σ^2",
            "用到的变量": [
                "sigma"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Zc_yearend": {
            "含义": "Black-Scholes 公式中的 Z 值（财年末）",
            "公式": "z = (ln(S/X) + (r - q + (σ^2)/2) * T) / (σ * √T)",
            "用到的变量": [
                "prccf",
                "Xc",
                "rfc",
                "bs_yield",
                "sigmasq",
                "sigma",
                "maturity_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Zc_grantdate": {
            "含义": "Black-Scholes 公式中的 Z 值（授予日）",
            "公式": "z = (ln(S/X) + (r - q + (σ^2)/2) * T) / (σ * √T)",
            "用到的变量": [
                "mktpric",
                "Xc",
                "rfc",
                "bs_yield",
                "sigmasq",
                "sigma",
                "maturity_grantdate"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Sc_yearend": {
            "含义": "期权对股价的敏感性（财年末）",
            "公式": "S = e^(−q*T) ⋅ N(Z) ⋅ S/100 ⋅ numsecur",
            "用到的变量": [
                "bs_yield",
                "maturity_yearend",
                "Zc_yearend",
                "prccf",
                "numsecur"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Vc_yearend": {
            "含义": "期权价值（财年末）",
            "公式": "V = numsecur ⋅ (S ⋅ e^(−q*T) ⋅ N(Z) − X ⋅ e^(−r*T) ⋅ N(Z − σ*T))",
            "用到的变量": [
                "numsecur",
                "prccf",
                "bs_yield",
                "maturity_yearend",
                "Zc_yearend",
                "Xc",
                "rfc",
                "sigma"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Rc_yearend": {
            "含义": "期权对波动率的敏感性（财年末）",
            "公式": "R = e^(−q*T) ⋅ N'(Z) ⋅ S ⋅ T^(1/2) ⋅ 0.01 ⋅ numsecur",
            "用到的变量": [
                "bs_yield",
                "maturity_yearend",
                "Zc_yearend",
                "prccf",
                "numsecur"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "delta": {
            "含义": "高管薪酬对股价的敏感性",
            "公式": "delta = Svest + Sunvest + Sopts_grants_yearend + Sshr",
            "用到的变量": [
                "Svest",
                "Sunvest",
                "Sopts_grants_yearend",
                "Sshr"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "vega": {
            "含义": "高管薪酬对波动率的敏感性",
            "公式": "vega = Rvest + Runvest + Ropts_grants_yearend",
            "用到的变量": [
                "Rvest",
                "Runvest",
                "Ropts_grants_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "optiondelta": {
            "含义": "期权对股价的敏感性",
            "公式": "optiondelta = Svest + Sunvest + Sopts_grants_yearend",
            "用到的变量": [
                "Svest",
                "Sunvest",
                "Sopts_grants_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "sharedelta": {
            "含义": "股票对股价的敏感性",
            "公式": "sharedelta = Sshr",
            "用到的变量": [
                "Sshr"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Vopts_yearend": {
            "含义": "期权组合价值（财年末）",
            "公式": "V = Vvest + Vunvest + Vopts_yearend",
            "用到的变量": [
                "Vvest",
                "Vunvest",
                "Vopts_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Vportfolio_yearend": {
            "含义": "高管与公司相关的财富",
            "公式": "V = Vvest + Vunvest + Vopts_yearend + Vshr",
            "用到的变量": [
                "Vvest",
                "Vunvest",
                "Vopts_yearend",
                "Vshr"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "maturity_yearend": {
            "含义": "期权到期时间（财年末）",
            "公式": "maturity_yearend = (exdate − fyenddt) / 365",
            "用到的变量": [
                "exdate",
                "fyenddt"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "maturity_grantdate": {
            "含义": "期权到期时间（授予日）",
            "公式": "maturity_grantdate = (exdate − assumed_grantdate) / 365",
            "用到的变量": [
                "exdate",
                "assumed_grantdate"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Xc": {
            "含义": "期权行权价格",
            "公式": "X = expric",
            "用到的变量": [
                "expric"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "realizable_value": {
            "含义": "期权的可实现价值",
            "公式": "realizable_value = (prccf - Xc) * numsecur",
            "用到的变量": [
                "prccf",
                "Xc",
                "numsecur"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Sshr": {
            "含义": "持股对股价的敏感性",
            "公式": "Sshr = shrown * prccf / 100",
            "用到的变量": [
                "shrown",
                "prccf"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Vshr": {
            "含义": "持股的价值",
            "公式": "Vshr = shrown * prccf",
            "用到的变量": [
                "shrown",
                "prccf"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Svest": {
            "含义": "已归属期权对股价的敏感性",
            "公式": "Svest = opts_vested_num * prccf / 100",
            "用到的变量": [
                "opts_vested_num",
                "prccf"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Sunvest": {
            "含义": "未归属期权对股价的敏感性",
            "公式": "Sunvest = opts_unvested_num * prccf / 100",
            "用到的变量": [
                "opts_unvested_num",
                "prccf"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Sopts_grants_yearend": {
            "含义": "期权奖励对股价的敏感性（财年末）",
            "公式": "Sopts_grants_yearend = option_awards_num * prccf / 100",
            "用到的变量": [
                "option_awards_num",
                "prccf"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Rvest": {
            "含义": "已归属期权对波动率的敏感性",
            "公式": "Rvest = opts_vested_num * sigma * sqrt(maturity_yearend)",
            "用到的变量": [
                "opts_vested_num",
                "sigma",
                "maturity_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Runvest": {
            "含义": "未归属期权对波动率的敏感性",
            "公式": "Runvest = opts_unvested_num * sigma * sqrt(maturity_yearend)",
            "用到的变量": [
                "opts_unvested_num",
                "sigma",
                "maturity_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "Ropts_grants_yearend": {
            "含义": "期权奖励对波动率的敏感性（财年末）",
            "公式": "Ropts_grants_yearend = option_awards_num * sigma * sqrt(maturity_yearend)",
            "用到的变量": [
                "option_awards_num",
                "sigma",
                "maturity_yearend"
            ],
            "示例文件": "Wrds studio code_delta and vega"
        },
        "estimated_yield": {
            "含义": "估计的股息收益率",
            "公式": "estimated_yield = (divyield + ldivyield + l2divyield) / 3",
            "示例文件": "Wrds studio code_delta and vega",
            "用到的变量": [
                "divyield",
                "ldivyield",
                "l2divyield"
            ]
        }
    },
    "studio code_size btm portfolio adjusted BHAR_Barber and Lyon(JFE1997)": {
        "ncusip": {
            "含义": "CUSIP标识符",
            "数据库来源": [
                "crsp.mse"
            ],
            "示例文件": "studio code_size btm portfolio adjusted BHAR_Barber and Lyon(JFE1997)"
        }
    },
    "wrds studio code_period and start lawsuit dummy": {
        "legal_case_key": {
            "含义": "法律案件唯一标识符",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "CASE_START_DATE_S": {
            "含义": "法律案件开始日期",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "CASE_END_DATE_S": {
            "含义": "法律案件结束日期",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "PLAINTIFF": {
            "含义": "原告标识（1表示原告）",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "DEFENDANT": {
            "含义": "被告标识（1表示被告）",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "SETTLEMENT_AMT": {
            "含义": "法律和解金额",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "is_category_type_X": {
            "含义": "案件类型标识（X为具体类型代码，如1表示集体诉讼，41表示证券诉讼等）",
            "数据库来源": [
                "audit.auditlegal"
            ],
            "示例文件": "wrds studio code_period and start lawsuit dummy"
        },
        "lawsuit": {
            "含义": "是否涉及诉讼（1表示涉及，0表示不涉及）",
            "公式": "lawsuit = 1（如果案件类型满足条件）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_X"
            ]
        },
        "security": {
            "含义": "是否涉及证券诉讼",
            "公式": "security = is_category_type_41 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_41"
            ]
        },
        "class": {
            "含义": "是否涉及集体诉讼",
            "公式": "class = is_category_type_1 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_1"
            ]
        },
        "collective": {
            "含义": "是否涉及集体行动诉讼",
            "公式": "collective = is_category_type_51 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_51"
            ]
        },
        "derivative": {
            "含义": "是否涉及衍生诉讼",
            "公式": "derivative = is_category_type_97 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_97"
            ]
        },
        "product": {
            "含义": "是否涉及产品责任诉讼",
            "公式": "product = (product_lia + product_con + product_motor + product_marine + product_air) >= 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "product_lia",
                "product_con",
                "product_motor",
                "product_marine",
                "product_air"
            ]
        },
        "copy_patent": {
            "含义": "是否涉及版权或专利诉讼",
            "公式": "copy_patent = (copyright + patent) >= 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "copyright",
                "patent"
            ]
        },
        "antitrust": {
            "含义": "是否涉及反垄断诉讼",
            "公式": "antitrust = is_category_type_6 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_6"
            ]
        },
        "fin_rep": {
            "含义": "是否涉及财务报告诉讼",
            "公式": "fin_rep = is_category_type_48 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_48"
            ]
        },
        "merger": {
            "含义": "是否涉及并购诉讼",
            "公式": "merger = is_category_type_33 * 1",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "is_category_type_33"
            ]
        },
        "pdsue_lawsuit": {
            "含义": "是否在财务年度内涉及诉讼（基于案件开始和结束年份）",
            "公式": "pdsue_lawsuit = 1（如果 lawsuit_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "lawsuit_sum"
            ]
        },
        "pdsue_security": {
            "含义": "是否在财务年度内涉及证券诉讼",
            "公式": "pdsue_security = 1（如果 security_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "security_sum"
            ]
        },
        "pdsue_class": {
            "含义": "是否在财务年度内涉及集体诉讼",
            "公式": "pdsue_class = 1（如果 class_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "class_sum"
            ]
        },
        "pdsue_collective": {
            "含义": "是否在财务年度内涉及集体行动诉讼",
            "公式": "pdsue_collective = 1（如果 collective_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "collective_sum"
            ]
        },
        "pdsue_derivative": {
            "含义": "是否在财务年度内涉及衍生诉讼",
            "公式": "pdsue_derivative = 1（如果 derivative_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "derivative_sum"
            ]
        },
        "pdsue_product": {
            "含义": "是否在财务年度内涉及产品责任诉讼",
            "公式": "pdsue_product = 1（如果 product_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "product_sum"
            ]
        },
        "pdsue_copy_patent": {
            "含义": "是否在财务年度内涉及版权或专利诉讼",
            "公式": "pdsue_copy_patent = 1（如果 copy_patent_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "copy_patent_sum"
            ]
        },
        "pdsue_antitrust": {
            "含义": "是否在财务年度内涉及反垄断诉讼",
            "公式": "pdsue_antitrust = 1（如果 antitrust_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "antitrust_sum"
            ]
        },
        "pdsue_fin_rep": {
            "含义": "是否在财务年度内涉及财务报告诉讼",
            "公式": "pdsue_fin_rep = 1（如果 fin_rep_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "fin_rep_sum"
            ]
        },
        "pdsue_merger": {
            "含义": "是否在财务年度内涉及并购诉讼",
            "公式": "pdsue_merger = 1（如果 merger_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "merger_sum"
            ]
        },
        "stsue_lawsuit": {
            "含义": "是否在案件开始年份涉及诉讼",
            "公式": "stsue_lawsuit = 1（如果 lawsuit_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "lawsuit_sum"
            ]
        },
        "stsue_security": {
            "含义": "是否在案件开始年份涉及证券诉讼",
            "公式": "stsue_security = 1（如果 security_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "security_sum"
            ]
        },
        "stsue_class": {
            "含义": "是否在案件开始年份涉及集体诉讼",
            "公式": "stsue_class = 1（如果 class_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "class_sum"
            ]
        },
        "stsue_collective": {
            "含义": "是否在案件开始年份涉及集体行动诉讼",
            "公式": "stsue_collective = 1（如果 collective_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "collective_sum"
            ]
        },
        "stsue_derivative": {
            "含义": "是否在案件开始年份涉及衍生诉讼",
            "公式": "stsue_derivative = 1（如果 derivative_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "derivative_sum"
            ]
        },
        "stsue_product": {
            "含义": "是否在案件开始年份涉及产品责任诉讼",
            "公式": "stsue_product = 1（如果 product_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "product_sum"
            ]
        },
        "stsue_copy_patent": {
            "含义": "是否在案件开始年份涉及版权或专利诉讼",
            "公式": "stsue_copy_patent = 1（如果 copy_patent_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "copy_patent_sum"
            ]
        },
        "stsue_antitrust": {
            "含义": "是否在案件开始年份涉及反垄断诉讼",
            "公式": "stsue_antitrust = 1（如果 antitrust_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "antitrust_sum"
            ]
        },
        "stsue_fin_rep": {
            "含义": "是否在案件开始年份涉及财务报告诉讼",
            "公式": "stsue_fin_rep = 1（如果 fin_rep_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "fin_rep_sum"
            ]
        },
        "stsue_merger": {
            "含义": "是否在案件开始年份涉及并购诉讼",
            "公式": "stsue_merger = 1（如果 merger_sum >= 1）",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "merger_sum"
            ]
        },
        "stsettleamt": {
            "含义": "案件开始年份的和解金额总和",
            "公式": "stsettleamt = sum(SETTLEMENT_AMT)",
            "示例文件": "wrds studio code_period and start lawsuit dummy",
            "用到的变量": [
                "SETTLEMENT_AMT"
            ]
        }
    },
    "studio code_market adjusted_BHAR": {
        "cfacpr": {
            "含义": "价格调整因子",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_market adjusted_BHAR"
        },
        "cfacshr": {
            "含义": "股份调整因子",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_market adjusted_BHAR"
        },
        "shrcd": {
            "含义": "股份代码",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_market adjusted_BHAR"
        }
    },
    "studio code_model adjusted AR_event study": {
        "dlret": {
            "含义": "Delisting Return",
            "数据库来源": [
                "crsp.dsedelist"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "mktrf": {
            "含义": "Market Return minus Risk-Free Rate",
            "数据库来源": [
                "ff.factors_daily"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "smb": {
            "含义": "Small Minus Big Factor",
            "数据库来源": [
                "ff.factors_daily"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "hml": {
            "含义": "High Minus Low Factor",
            "数据库来源": [
                "ff.factors_daily"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "umd": {
            "含义": "Momentum Factor",
            "数据库来源": [
                "ff.factors_daily"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "rf": {
            "含义": "Risk-Free Rate",
            "数据库来源": [
                "ff.factors_daily"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "exret": {
            "含义": "市场调整后的收益率",
            "公式": "exret = (1 + ret) * (1 + dlret) - 1 - mkt",
            "用到的变量": [
                "ret",
                "dlret",
                "mkt"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "abret0": {
            "含义": "市场调整后的异常收益率",
            "公式": "abret0 = exret",
            "用到的变量": [
                "exret"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "abret1": {
            "含义": "市场模型的异常收益率",
            "公式": "abret1 = ret - (alpha1 + beta1 * mktrf)",
            "用到的变量": [
                "ret",
                "alpha1",
                "beta1",
                "mktrf"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "abret2": {
            "含义": "Fama-French 模型的异常收益率",
            "公式": "abret2 = ret - (alpha2 + beta2 * mktrf + smb2 * smb + hml2 * hml)",
            "用到的变量": [
                "ret",
                "alpha2",
                "beta2",
                "mktrf",
                "smb2",
                "smb",
                "hml2",
                "hml"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "abret3": {
            "含义": "Carhart 模型的异常收益率",
            "公式": "abret3 = ret - (alpha3 + beta3 * mktrf + smb3 * smb + hml3 * hml + umd3 * umd)",
            "用到的变量": [
                "ret",
                "alpha3",
                "beta3",
                "mktrf",
                "smb3",
                "smb",
                "hml3",
                "hml",
                "umd3",
                "umd"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "car0": {
            "含义": "累积异常收益率（市场调整后）",
            "公式": "car0 = sum(abret0)",
            "用到的变量": [
                "abret0"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "car1": {
            "含义": "累积异常收益率（市场模型）",
            "公式": "car1 = sum(abret1)",
            "用到的变量": [
                "abret1"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "car2": {
            "含义": "累积异常收益率（Fama-French 模型）",
            "公式": "car2 = sum(abret2)",
            "用到的变量": [
                "abret2"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "car3": {
            "含义": "累积异常收益率（Carhart 模型）",
            "公式": "car3 = sum(abret3)",
            "用到的变量": [
                "abret3"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "bhar0": {
            "含义": "买入持有异常收益率（市场调整后）",
            "公式": "bhar0 = cret - cmkt",
            "用到的变量": [
                "cret",
                "cmkt"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "bhar1": {
            "含义": "买入持有异常收益率（市场模型）",
            "公式": "bhar1 = cret - cexpret1",
            "用到的变量": [
                "cret",
                "cexpret1"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "bhar2": {
            "含义": "买入持有异常收益率（Fama-French 模型）",
            "公式": "bhar2 = cret - cexpret2",
            "用到的变量": [
                "cret",
                "cexpret2"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "bhar3": {
            "含义": "买入持有异常收益率（Carhart 模型）",
            "公式": "bhar3 = cret - cexpret3",
            "用到的变量": [
                "cret",
                "cexpret3"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "scar0": {
            "含义": "标准化累积异常收益率（市场调整后）",
            "公式": "scar0 = car0 / sqrt(var0 * evtwin)",
            "用到的变量": [
                "car0",
                "var0",
                "evtwin"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "scar1": {
            "含义": "标准化累积异常收益率（市场模型）",
            "公式": "scar1 = car1 / sqrt(var1 * evtwin)",
            "用到的变量": [
                "car1",
                "var1",
                "evtwin"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "scar2": {
            "含义": "标准化累积异常收益率（Fama-French 模型）",
            "公式": "scar2 = car2 / sqrt(var2 * evtwin)",
            "用到的变量": [
                "car2",
                "var2",
                "evtwin"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        },
        "scar3": {
            "含义": "标准化累积异常收益率（Carhart 模型）",
            "公式": "scar3 = car3 / sqrt(var3 * evtwin)",
            "用到的变量": [
                "car3",
                "var3",
                "evtwin"
            ],
            "示例文件": "studio code_model adjusted AR_event study"
        }
    },
    "step3_variables calculation": {
        "saleq": {
            "含义": "销售额（季度）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "step3_variables calculation"
        },
        "noaq": {
            "含义": "净运营资产",
            "公式": "noaq = RECTQ + INVTQ + ACOQ + PPENTQ + INTANQ + ALTOQ - (APQ + LCOQ + LOQ)",
            "用到的变量": [
                "RECTQ",
                "INVTQ",
                "ACOQ",
                "PPENTQ",
                "INTANQ",
                "ALTOQ",
                "APQ",
                "LCOQ",
                "LOQ"
            ],
            "示例文件": "step3_variables calculation"
        },
        "earnq": {
            "含义": "季度收益",
            "公式": "earnq = IBQ + SPIQ - DVPQ",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "IBQ",
                "SPIQ",
                "DVPQ"
            ]
        },
        "accrq": {
            "含义": "季度应计项目",
            "公式": "accrq = rectq_ch + invtq_ch + acoq_ch - (apq_ch + lcoq_ch) -DPQ",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "rectq_ch",
                "invtq_ch",
                "acoq_ch",
                "apq_ch",
                "lcoq_ch",
                "DPQ"
            ]
        },
        "investq": {
            "含义": "季度投资",
            "公式": "investq = PPENTQ_CH + INVTQ_CH",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "PPENTQ_CH",
                "INVTQ_CH"
            ]
        },
        "noaq_ch": {
            "含义": "净运营资产变化",
            "公式": "noaq_ch = NOAQ - NOAQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "NOAQ",
                "NOAQ_L1"
            ]
        },
        "etpq": {
            "含义": "季度收益与市值比",
            "公式": "etpq = earnq / me_comp",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "earnq",
                "me_comp"
            ]
        },
        "btpq": {
            "含义": "季度账面价值与市值比",
            "公式": "btpq = CEQQ / me_comp",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "CEQQ",
                "me_comp"
            ]
        },
        "noaq_l1": {
            "含义": "上一期净运营资产",
            "公式": "noaq_l1 = lag(noaq)",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "noaq"
            ]
        },
        "rectq_ch": {
            "含义": "应收账款变化,与上期相比",
            "公式": "rectq_ch = RECTQ - RECTQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "RECTQ"
            ]
        },
        "invtq_ch": {
            "含义": "存货变化，与上期相比",
            "公式": "invtq_ch = INVTQ - INVTQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "INVTQ"
            ]
        },
        "acoq_ch": {
            "含义": "其他流动资产变化,与上期相比",
            "公式": "acoq_ch = ACOQ - ACOQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "ACOQ"
            ]
        },
        "apq_ch": {
            "含义": "应付账款变化，,与上期相比",
            "公式": "apq_ch = APQ - APQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "APQ"
            ]
        },
        "lcoq_ch": {
            "含义": "其他流动负债变化,与上期相比",
            "公式": "lcoq_ch = LCOQ - LCOQ_L1",
            "示例文件": "step3_variables calculation",
            "用到的变量": [
                "LCOQ"
            ]
        }
    },
    "studio code_montly ar_DGTW1997": {
        "SEQ": {
            "含义": "Shareholders' Equity",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "PSTKRV": {
            "含义": "Preferred Stock - Redemption Value",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "PSTKL": {
            "含义": "Preferred Stock - Liquidating Value",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "BM_IND": {
            "含义": "行业平均账面市值比",
            "公式": "BM_IND = mean(BM) within industry",
            "用到的变量": [
                "BM"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "cret_12m": {
            "含义": "12个月累积收益率",
            "公式": "cret_12m = (1 + ret).cumprod() - 1",
            "用到的变量": [
                "ret"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "bmr": {
            "含义": "账面市值比排名",
            "公式": "bmr = rank(BM) within group",
            "用到的变量": [
                "BM"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "momr": {
            "含义": "动量排名",
            "公式": "momr = rank(MOM) within group",
            "用到的变量": [
                "MOM"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "BM_ADJ": {
            "含义": "调整后的账面市值比",
            "公式": "BM_ADJ = BM - BM_IND",
            "用到的变量": [
                "BM",
                "BM_IND"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "MOM": {
            "含义": "12个月动量因子",
            "公式": "MOM = lag(cret_12m)",
            "用到的变量": [
                "cret_12m"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "DGTW_PORT": {
            "含义": "规模、账面市值比和动量组合编号",
            "公式": "DGTW_PORT = group || bmr || momr",
            "用到的变量": [
                "group",
                "bmr",
                "momr"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "DGTW_VWRET": {
            "含义": "DGTW 基准收益率",
            "公式": "Weighted average of returns in DGTW_PORT",
            "用到的变量": [
                "DGTW_PORT"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        },
        "DGTW_XRET": {
            "含义": "DGTW 超额收益率",
            "公式": "DGTW_XRET = ret - DGTW_VWRET",
            "用到的变量": [
                "ret",
                "DGTW_VWRET"
            ],
            "示例文件": "studio code_montly ar_DGTW1997"
        }
    },
    "studio code_yearly funda variable": {
        "PSTK": {
            "含义": "优先股账面价值",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "TXDB": {
            "含义": "递延税款",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "ITCB": {
            "含义": "投资税收抵免",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "permco": {
            "含义": "CRSP 公司标识符",
            "数据库来源": [
                "crsp.ccmxpf_lnkhist"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "ME": {
            "含义": "股票市值",
            "公式": "abs(prc)*shrout/1000",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "prc",
                "shrout"
            ]
        },
        "BE": {
            "含义": "调整后的股东权益",
            "公式": "sum(SEQ, coalesce(TXDITC,sum(TXDB, ITCB)),-pstk_new)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "SEQ",
                "TXDITC",
                "TXDB",
                "ITCB",
                "pstk_new"
            ]
        },
        "me_comp_funda": {
            "含义": "公司总市值（基于Funda数据）",
            "公式": "prcc_c*csho",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "prcc_c",
                "csho"
            ]
        },
        "ocf6_avgcrsp": {
            "含义": "经营活动现金流/平均公司总市值（来自CRSP）",
            "公式": "ocfvar/avgme_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "avgme_crsp"
            ]
        },
        "sale1_at": {
            "含义": "销售额/总资产",
            "公式": "sale/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "at"
            ]
        },
        "sale2_comp": {
            "含义": "销售额/公司总市值(基于funda数据)",
            "公式": "sale/me_comp_funda",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "me_comp_funda"
            ]
        },
        "sale3_crps": {
            "含义": "销售额/公司总市值（来自CRSP）",
            "公式": "sale/me_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "me_crsp"
            ]
        },
        "sale4_avgat": {
            "含义": "销售额/平均总资产",
            "公式": "sale/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "avgat"
            ]
        },
        "sale5_avgcomp": {
            "含义": "销售额/平均公司总市值(基于funda数据)",
            "公式": "sale/avgme_comp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "avgme_comp"
            ]
        },
        "sale6_avgcrps": {
            "含义": "销售额/平均公司总市值（来自CRSP）",
            "公式": "sale/avgme_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "sale",
                "avgme_crsp"
            ]
        },
        "accr1_end": {
            "含义": "应计项目1/总资产",
            "公式": "accrvar0/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "accrvar0",
                "at"
            ]
        },
        "accr2_avg": {
            "含义": "应计项目1/平均总资产",
            "公式": "accrvar0/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "accrvar0",
                "avgat"
            ]
        },
        "accr3_end": {
            "含义": "应计项目2/总资产",
            "公式": "accrvar1/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "accrvar1",
                "at"
            ]
        },
        "accr4_avg": {
            "含义": "应计项目2/平均总资产",
            "公式": "accrvar1/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "accrvar1",
                "avgat"
            ]
        },
        "wc": {
            "含义": "营运资本/总资产",
            "公式": "wcvar/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "wcvar",
                "at"
            ]
        },
        "cash": {
            "含义": "现金/总资产",
            "公式": "che/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "che",
                "at"
            ]
        },
        "ppe_at": {
            "含义": "固定资产/总资产",
            "公式": "ppent/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ppent",
                "at"
            ]
        },
        "ppegth": {
            "含义": "固定资产增长率",
            "公式": "(ppent-ppent_l1)/ppent_l1",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ppent",
                "ppent_l1"
            ]
        },
        "xad1_at": {
            "含义": "广告支出/总资产",
            "公式": "xad/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xad",
                "at"
            ]
        },
        "xad2_avgat": {
            "含义": "广告支出/平均总资产",
            "公式": "xad/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xad",
                "avgat"
            ]
        },
        "xad3_sale": {
            "含义": "广告支出/销售额",
            "公式": "xad/sale",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xad",
                "sale"
            ]
        },
        "avgme_comp": {
            "含义": "平均公司总市值（基于funda数据）",
            "公式": "(me_comp+me_comp)/2",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_comp"
            ]
        },
        "avgme_crsp": {
            "含义": "平均公司总市值（基于CRSP数据）",
            "公式": "(me_crsp+me_crsp)/2",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_crsp"
            ]
        },
        "dlc": {
            "含义": "流动负债",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "dp": {
            "含义": "折旧",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "oancf": {
            "含义": "经营活动现金流",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "csho": {
            "含义": "流通股数",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "PSTKR": {
            "含义": "优先股赎回价值",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "TXDITC": {
            "含义": "递延所得税",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "xopr": {
            "含义": "营业费用",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "aco": {
            "含义": "其他流动资产",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "ap": {
            "含义": "应付账款",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "lco": {
            "含义": "其他长期负债",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "txp": {
            "含义": "所得税费用",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "xrd": {
            "含义": "研发支出",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "capx": {
            "含义": "资本支出",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "sppe": {
            "含义": "固定资产",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "xad": {
            "含义": "广告支出",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "dltt": {
            "含义": "长期负债",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "ib": {
            "含义": "税后利润",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "ebitda": {
            "含义": "息税折旧摊销前利润",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "oibdp": {
            "含义": "营业利润（息税前）",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "it": {
            "含义": "调整后的营业利润",
            "公式": "coalesce(ebit,oiadp,sale-xopr-dp)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebit",
                "oiadp",
                "sale",
                "xopr",
                "dp"
            ]
        },
        "da": {
            "含义": "调整后的EBITDA",
            "公式": "coalesce(ebitda,oibdp,sale-xopr)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebitda",
                "oibdp",
                "sale",
                "xopr"
            ]
        },
        "pstk_new": {
            "含义": "新的优先股价值",
            "公式": "coalesce(PSTKR,PSTK)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "PSTKR",
                "PSTK"
            ]
        },
        "be": {
            "含义": "股东权益的另一种计算方式",
            "公式": "sum(SEQ, TXDITC, -pstk_new)",
            "用到的变量": [
                "SEQ",
                "TXDITC",
                "pstk_new"
            ],
            "示例文件": "studio code_yearly funda variable"
        },
        "wcvar": {
            "含义": "营运资本",
            "公式": "che+invt+rect+aco-ap-dlc-txp-lco",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "che",
                "invt",
                "rect",
                "aco",
                "ap",
                "dlc",
                "txp",
                "lco"
            ]
        },
        "ocfvar": {
            "含义": "调整后的经营活动现金流",
            "公式": "coalesce(oancf,ib-sum((act-act_l1), -(che-che_l1), -(lct-lct_l1),(txp-txp_l1),-dp))",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "oancf",
                "ib",
                "act",
                "act_l1",
                "che",
                "che_l1",
                "lct",
                "lct_l1",
                "txp",
                "txp_l1",
                "dp"
            ]
        },
        "accrvar0": {
            "含义": "应计项目(方法1)",
            "公式": "sum((act-act_l1), -(che-che_l1), -(lct-lct_l1),(txp-txp_l1),-dp)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "act",
                "act_l1",
                "che",
                "che_l1",
                "lct",
                "lct_l1",
                "txp",
                "txp_l1",
                "dp"
            ]
        },
        "accrvar1": {
            "含义": "应计项目(方法2)",
            "公式": "ib-ocfvar",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "ocfvar"
            ]
        },
        "size_lnat": {
            "含义": "总资产对数",
            "公式": "log(at*10**6)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "at"
            ]
        },
        "size_comp": {
            "含义": "公司总市值对数",
            "公式": "log(me_comp_funda*10**6)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_comp_funda"
            ]
        },
        "size_crsp": {
            "含义": "公司总市值对数（来自CRSP）",
            "公式": "log(me_crsp*10**6)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_crsp"
            ]
        },
        "bm1": {
            "含义": "账面市值比(seq/me_comp_funda)",
            "公式": "seq/me_comp_funda",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "seq",
                "me_comp_funda"
            ]
        },
        "bm2": {
            "含义": "账面市值比(be/me_comp_funda)",
            "公式": "be/me_comp_funda",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "be",
                "me_comp_funda"
            ]
        },
        "bm3": {
            "含义": "账面市值比(seq/me_crsp)",
            "公式": "seq/me_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "seq",
                "me_crsp"
            ]
        },
        "bm4": {
            "含义": "账面市值比(be/me_crsp)",
            "公式": "be/me_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "be",
                "me_crsp"
            ]
        },
        "mb1": {
            "含义": "市值账面比(me_comp_funda/seq)",
            "公式": "1/bm1",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "bm1"
            ]
        },
        "mb2": {
            "含义": "市值账面比(me_comp_funda/be)",
            "公式": "1/bm2",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "bm2"
            ]
        },
        "mb3": {
            "含义": "市值账面比(me_crsp/seq)",
            "公式": "1/bm3",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "bm3"
            ]
        },
        "mb4": {
            "含义": "市值账面比(me_crsp/be)",
            "公式": "1/bm4",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "bm4"
            ]
        },
        "lev1": {
            "含义": "杠杆率1",
            "公式": "sum(dlc, dltt)/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "dlc",
                "dltt",
                "at"
            ]
        },
        "lev2": {
            "含义": "杠杆率2",
            "公式": "dltt/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "dltt",
                "at"
            ]
        },
        "tbq1_se_comp": {
            "含义": "托宾Q值1 (基于市值和股东权益)",
            "公式": "(me_comp_funda+at-seq)/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_comp_funda",
                "at",
                "seq"
            ]
        },
        "tbq2_be_comp": {
            "含义": "托宾Q值2(基于市值和账面价值)",
            "公式": "(me_comp_funda+at-be)/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_comp_funda",
                "at",
                "be"
            ]
        },
        "tbq3_se_crsp": {
            "含义": "托宾Q值3(基于市值和股东权益)",
            "公式": "(me_crsp+at-seq)/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_crsp",
                "at",
                "seq"
            ]
        },
        "tbq4_be_crsp": {
            "含义": "托宾Q值4 (基于市值和账面价值)",
            "公式": "(me_crsp+at-be)/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "me_crsp",
                "at",
                "be"
            ]
        },
        "roa1_ibend": {
            "含义": "资产收益率1(ib/at)",
            "公式": "ib/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "at"
            ]
        },
        "roa2_niend": {
            "含义": "资产收益率2(ni/at)",
            "公式": "ni/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "at"
            ]
        },
        "roa3_itend": {
            "含义": "资产收益率3(ebit/at)",
            "公式": "ebit/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebit",
                "at"
            ]
        },
        "roa4_daend": {
            "含义": "资产收益率4(ebitda/at)",
            "公式": "ebitda/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebitda",
                "at"
            ]
        },
        "roa5_ibavg": {
            "含义": "平均资产收益率1(ib/avgat)",
            "公式": "ib/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "avgat"
            ]
        },
        "roa6_niavg": {
            "含义": "平均资产收益率2(ni/avgat)",
            "公式": "ni/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "avgat"
            ]
        },
        "roa7_itavg": {
            "含义": "平均资产收益率3(ebit/avgat)",
            "公式": "ebit/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebit",
                "avgat"
            ]
        },
        "roa8_daavg": {
            "含义": "平均资产收益率4(ebitda/avgat)",
            "公式": "ebitda/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ebitda",
                "avgat"
            ]
        },
        "roe1_ibendse": {
            "含义": "股东权益收益率1(ib/seq)",
            "公式": "ib/seq",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "seq"
            ]
        },
        "roe2_ibendbe": {
            "含义": "股东权益收益率2(ib/be)",
            "公式": "ib/be",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "be"
            ]
        },
        "roe3_niendse": {
            "含义": "股东权益收益率3(ni/seq)",
            "公式": "ni/seq",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "seq"
            ]
        },
        "roe4_niendbe": {
            "含义": "股东权益收益率4(ni/be)",
            "公式": "ni/be",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "be"
            ]
        },
        "roe5_ibavgse": {
            "含义": "平均股东权益收益率1(ib/avgseq)",
            "公式": "ib/avgseq",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "avgseq"
            ]
        },
        "roe6_ibavgbe": {
            "含义": "平均股东权益收益率2(ib/avgbe)",
            "公式": "ib/avgbe",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "avgbe"
            ]
        },
        "roe7_niavgse": {
            "含义": "平均股东权益收益率3(ni/avgseq)",
            "公式": "ni/avgseq",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "avgseq"
            ]
        },
        "roe8_niavgbe": {
            "含义": "平均股东权益收益率4(ni/avgbe)",
            "公式": "ni/avgbe",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "avgbe"
            ]
        },
        "roce1_ibend": {
            "含义": "资本收益率1(ib/(dltt+dlc+seq))",
            "公式": "ib/(dltt+dlc+seq)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "dltt",
                "dlc",
                "seq"
            ]
        },
        "roce3_niend": {
            "含义": "资本收益率2(ni/(dltt+dlc+seq))",
            "公式": "ni/(dltt+dlc+seq)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "dltt",
                "dlc",
                "seq"
            ]
        },
        "roce3_itend": {
            "含义": "资本收益率3(it/(dltt+dlc+seq))",
            "公式": "it/(dltt+dlc+seq)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "it",
                "dltt",
                "dlc",
                "seq"
            ]
        },
        "roce4_daend": {
            "含义": "资本收益率4(da/(dltt+dlc+seq))",
            "公式": "da/(dltt+dlc+seq)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "da",
                "dltt",
                "dlc",
                "seq"
            ]
        },
        "roce5_ibavg": {
            "含义": "平均资本收益率1(ib/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2))",
            "公式": "ib/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ib",
                "dltt",
                "dltt_l1",
                "dlc",
                "dlc_l1",
                "seq",
                "seq_l1"
            ]
        },
        "roce6_niavg": {
            "含义": "平均资本收益率2(ni/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2))",
            "公式": "ni/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ni",
                "dltt",
                "dltt_l1",
                "dlc",
                "dlc_l1",
                "seq",
                "seq_l1"
            ]
        },
        "roce7_itavg": {
            "含义": "平均资本收益率3(it/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2))",
            "公式": "it/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "it",
                "dltt",
                "dltt_l1",
                "dlc",
                "dlc_l1",
                "seq",
                "seq_l1"
            ]
        },
        "roce8_daavg": {
            "含义": "平均资本收益率4(da/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2))",
            "公式": "da/((dltt+dltt_l1+dlc+dlc_l1+seq+seq_l1)/2)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "da",
                "dltt",
                "dltt_l1",
                "dlc",
                "dlc_l1",
                "seq",
                "seq_l1"
            ]
        },
        "loss1_ib": {
            "含义": "是否ib为负",
            "公式": "if roa1_ibend<0 then 1 else 0",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "roa1_ibend"
            ]
        },
        "loss2_ni": {
            "含义": "是否ni为负",
            "公式": "if roa2_niend<0 then 1 else 0",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "roa2_niend"
            ]
        },
        "loss3_it": {
            "含义": "是否it为负",
            "公式": "if roa3_itend<0 then 1 else 0",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "roa3_itend"
            ]
        },
        "loss4_da": {
            "含义": "是否da为负",
            "公式": "if roa4_daend<0 then 1 else 0",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "roa4_daend"
            ]
        },
        "capx_adj": {
            "含义": "调整后的资本支出",
            "公式": "sum(capx,-sppe)",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "sppe"
            ]
        },
        "capex1": {
            "含义": "资本支出比率1",
            "公式": "capx/sale",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "sale"
            ]
        },
        "capex2": {
            "含义": "资本支出比率2",
            "公式": "capx/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "at"
            ]
        },
        "capex3": {
            "含义": "资本支出比率3",
            "公式": "capx/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "avgat"
            ]
        },
        "capex4": {
            "含义": "资本支出比率4",
            "公式": "capx/ppent",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "ppent"
            ]
        },
        "capex5": {
            "含义": "资本支出比率5",
            "公式": "capx/avgppe",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx",
                "avgppe"
            ]
        },
        "capex6": {
            "含义": "调整后的资本支出比率1",
            "公式": "capx_adj/sale",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx_adj",
                "sale"
            ]
        },
        "capex7": {
            "含义": "调整后的资本支出比率2",
            "公式": "capx_adj/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx_adj",
                "at"
            ]
        },
        "capex8": {
            "含义": "调整后的资本支出比率3",
            "公式": "capx_adj/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx_adj",
                "avgat"
            ]
        },
        "capex9": {
            "含义": "调整后的资本支出比率4",
            "公式": "capx_adj/ppent",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx_adj",
                "ppent"
            ]
        },
        "capex10": {
            "含义": "调整后的资本支出比率5",
            "公式": "capx_adj/avgppe",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "capx_adj",
                "avgppe"
            ]
        },
        "rde1": {
            "含义": "研发支出比率1",
            "公式": "xrd/sale",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xrd",
                "sale"
            ]
        },
        "rde2": {
            "含义": "研发支出比率2",
            "公式": "xrd/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xrd",
                "at"
            ]
        },
        "rde3": {
            "含义": "研发支出比率3",
            "公式": "xrd/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "xrd",
                "avgat"
            ]
        },
        "ocf1_at": {
            "含义": "经营活动现金流/总资产",
            "公式": "ocfvar/at",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "at"
            ]
        },
        "ocf2_comp": {
            "含义": "经营活动现金流/公司总市值",
            "公式": "ocfvar/me_comp_funda",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "me_comp_funda"
            ]
        },
        "ocf3_crsp": {
            "含义": "经营活动现金流/公司总市值（来自CRSP）",
            "公式": "ocfvar/me_crsp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "me_crsp"
            ]
        },
        "ocf4_avgat": {
            "含义": "经营活动现金流/平均总资产",
            "公式": "ocfvar/avgat",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "avgat"
            ]
        },
        "ocf5_avgcomp": {
            "含义": "经营活动现金流/平均公司总市值(基于funda数据)",
            "公式": "ocfvar/avgme_comp",
            "示例文件": "studio code_yearly funda variable",
            "用到的变量": [
                "ocfvar",
                "avgme_comp"
            ]
        },
        "oancfq": {
            "含义": "季度经营活动现金流",
            "数据库来源": [
                "comp.funda"
            ],
            "示例文件": "studio code_yearly funda variable"
        }
    },
    "studio code_quarterly press release": {
        "rpna_date_utc": {
            "含义": "新闻稿发布日期（UTC）",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "rpna_time_utc": {
            "含义": "新闻稿发布时间（UTC）",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "rp_entity_id": {
            "含义": "Ravenpack实体标识符",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "entity_name": {
            "含义": "实体名称",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "country_code": {
            "含义": "国家代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_topic": {
            "含义": "新闻主题",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_group": {
            "含义": "新闻组",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_category": {
            "含义": "新闻类别",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "isin": {
            "含义": "ISIN 代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "rp_story_id": {
            "含义": "Ravenpack 新闻故事标识符",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_relevance": {
            "含义": "新闻相关性",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "ens": {
            "含义": "实体情绪分数",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "ENS_KEY": {
            "含义": "实体情绪关键字",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_source": {
            "含义": "新闻来源",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "css": {
            "含义": "公司状态代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_nip": {
            "含义": "新闻影响程度",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_bam": {
            "含义": "业务活动类型代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "peq": {
            "含义": "权益工具类型代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "press_bca": {
            "含义": "业务变更类型代码",
            "数据库来源": [
                "rpna.pr_equities_YYYY",
                "rpna.dj_equities_YYYY"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "data_value": {
            "含义": "CUSIP/TICKER 代码",
            "数据库来源": [
                "rpna.rp_company_mapping"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "range_start": {
            "含义": "有效范围开始时间",
            "数据库来源": [
                "rpna.rp_company_mapping"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "range_end": {
            "含义": "有效范围结束时间",
            "数据库来源": [
                "rpna.rp_company_mapping"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "companyid": {
            "含义": "公司标识符",
            "数据库来源": [
                "ciq.wrds_isin",
                "ciq.wrds_cusip",
                "ciq.wrds_ticker"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "companyname": {
            "含义": "公司名称",
            "数据库来源": [
                "ciq.wrds_isin",
                "ciq.wrds_cusip",
                "ciq.wrds_ticker"
            ],
            "示例文件": "studio code_quarterly press release"
        },
        "cnt_press": {
            "含义": "新闻发布数量",
            "公式": "count(rp_entity_id), 按`gvkey`和`datadate`分组统计",
            "示例文件": "studio code_quarterly press release",
            "用到的变量": [
                "rp_entity_id"
            ]
        }
    },
    "studio code_afevar": {
        "epsfxq": {
            "含义": "稀释后每股收益（EPS）",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "epspxq": {
            "含义": "基本每股收益（EPS）",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "ajexq": {
            "含义": "调整因子",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "cshprq": {
            "含义": "优先股数量",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "cshfdq": {
            "含义": "完全稀释股数",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "datafqtr": {
            "含义": "财报季度",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_afevar"
        },
        "ibtic": {
            "含义": "IBES ticker",
            "数据库来源": [
                "comp.security"
            ],
            "示例文件": "studio code_afevar"
        },
        "pends": {
            "含义": "预测期间结束日期",
            "数据库来源": [
                "ibes.actu_epsus"
            ],
            "示例文件": "studio code_afevar"
        },
        "usfirm": {
            "含义": "美国公司标识",
            "数据库来源": [
                "ibes.detu_epsus",
                "ibes.actu_epsus"
            ],
            "示例文件": "studio code_afevar"
        },
        "statpers": {
            "含义": "预测发布时间",
            "数据库来源": [
                "ibes.statsum_epsus"
            ],
            "示例文件": "studio code_afevar"
        },
        "pdf": {
            "含义": "预测类型",
            "数据库来源": [
                "ibes.detu_epsus"
            ],
            "示例文件": "studio code_afevar"
        },
        "estdats1": {
            "含义": "调整后的预测发布日期",
            "公式": "根据 anndats 调整为 CRSP 交易日",
            "用到的变量": [
                "anndats"
            ],
            "示例文件": "studio code_afevar"
        },
        "repdats1": {
            "含义": "调整后的财报发布日期",
            "公式": "根据 anndats 调整为 CRSP 交易日",
            "用到的变量": [
                "anndats"
            ],
            "示例文件": "studio code_afevar"
        },
        "est_factor": {
            "含义": "预测日调整因子",
            "数据库来源": [
                "crsp.dsf"
            ],
            "示例文件": "studio code_afevar"
        },
        "rep_factor": {
            "含义": "报告日调整因子",
            "数据库来源": [
                "crsp.dsf"
            ],
            "示例文件": "studio code_afevar"
        },
        "new_value": {
            "含义": "调整后的预测值",
            "公式": "根据 est_factor 和 rep_factor 调整",
            "用到的变量": [
                "value",
                "est_factor",
                "rep_factor"
            ],
            "示例文件": "studio code_afevar"
        },
        "p_count": {
            "含义": " 基于 primary 的预测个数",
            "公式": "sum(pdf='P')",
            "用到的变量": [
                "pdf"
            ],
            "示例文件": "studio code_afevar"
        },
        "d_count": {
            "含义": "基于 diluted 的预测个数",
            "公式": "sum(pdf='D')",
            "用到的变量": [
                "pdf"
            ],
            "示例文件": "studio code_afevar"
        },
        "est_median": {
            "含义": "预测中位数",
            "示例文件": "studio code_afevar",
            "数据库来源": [
                "ibes.detu_epsus",
                "ibes.statsum_epsus"
            ]
        },
        "est_mean": {
            "含义": "预测均值",
            "示例文件": "studio code_afevar",
            "数据库来源": [
                "ibes.detu_epsus",
                "ibes.statsum_epsus"
            ]
        },
        "numest": {
            "含义": "预测个数",
            "示例文件": "studio code_afevar",
            "数据库来源": [
                "ibes.detu_epsus",
                "ibes.statsum_epsus"
            ]
        },
        "dispersion": {
            "含义": "预测标准差",
            "示例文件": "studio code_afevar",
            "数据库来源": [
                "ibes.detu_epsus",
                "ibes.statsum_epsus"
            ]
        },
        "basis": {
            "含义": "基于 primary/diluted 的类型",
            "公式": "case when p_count>d_count then 'P' when p_count<=d_count then 'D' end",
            "用到的变量": [
                "p_count",
                "d_count"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_median_w90": {
            "含义": "90天窗口SUE中位数",
            "公式": "(act - est_median)/prccq",
            "用到的变量": [
                "act",
                "est_median",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_mean_w90": {
            "含义": "90天窗口SUE均值",
            "公式": "(act - est_mean)/prccq",
            "用到的变量": [
                "act",
                "est_mean",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_w90": {
            "含义": "90天窗口预测标准差",
            "公式": "dispersion",
            "用到的变量": [
                "dispersion"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_prc_w90": {
            "含义": "90天窗口预测标准差/股价",
            "公式": "dispersion/prccq",
            "用到的变量": [
                "dispersion",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "afcnt_w90": {
            "含义": "90天窗口预测个数",
            "公式": "numest",
            "用到的变量": [
                "numest"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_median_qtr": {
            "含义": "季度窗口SUE中位数",
            "公式": "(act - est_median)/prccq",
            "用到的变量": [
                "act",
                "est_median",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_mean_qtr": {
            "含义": "季度窗口SUE均值",
            "公式": "(act - est_mean)/prccq",
            "用到的变量": [
                "act",
                "est_mean",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_qtr": {
            "含义": "季度窗口预测标准差",
            "公式": "dispersion",
            "用到的变量": [
                "dispersion"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_prc_qtr": {
            "含义": "季度窗口预测标准差/股价",
            "公式": "dispersion/prccq",
            "用到的变量": [
                "dispersion",
                "prccq"
            ],
            "示例文件": "studio code_afevar"
        },
        "afcnt_qtr": {
            "含义": "季度窗口预测个数",
            "公式": "numest",
            "用到的变量": [
                "numest"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_median_con": {
            "含义": "consensus SUE中位数",
            "公式": "(act - est_median)/(prccq/AJEXQ)",
            "用到的变量": [
                "act",
                "est_median",
                "prccq",
                "AJEXQ"
            ],
            "示例文件": "studio code_afevar"
        },
        "sue_mean_con": {
            "含义": "consensus SUE均值",
            "公式": "(act - est_mean)/(prccq/AJEXQ)",
            "用到的变量": [
                "act",
                "est_mean",
                "prccq",
                "AJEXQ"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_con": {
            "含义": "consensus 预测标准差",
            "公式": "dispersion",
            "用到的变量": [
                "dispersion"
            ],
            "示例文件": "studio code_afevar"
        },
        "disp_prc_con": {
            "含义": "consensus 预测标准差/股价",
            "公式": "dispersion/(prccq/AJEXQ)",
            "用到的变量": [
                "dispersion",
                "prccq",
                "AJEXQ"
            ],
            "示例文件": "studio code_afevar"
        },
        "afcnt_con": {
            "含义": "consensus 预测个数",
            "公式": "numest",
            "用到的变量": [
                "numest"
            ],
            "示例文件": "studio code_afevar"
        }
    },
    "studio code_Event BHAR_Barber and Lyon1997": {
        "me_comp": {
            "含义": "公司级别的总市值",
            "公式": "me_comp = sum(ME)",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ME"
            ]
        },
        "cret_esb25": {
            "含义": "五分位规模和五分位账面市值比组合的累计回报",
            "公式": "cret_esb25 = (1 + ret_esb25).cumprod() - 1",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret_esb25"
            ]
        },
        "cret_vsb25": {
            "含义": "五分位规模和五分位账面市值比组合的市值加权累计回报",
            "公式": "cret_vsb25 = (1 + ret_vsb25).cumprod() - 1",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret_vsb25"
            ]
        },
        "cret_esb50": {
            "含义": "十分位规模和五分位账面市值比组合的累计回报",
            "公式": "cret_esb50 = (1 + ret_esb50).cumprod() - 1",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret_esb50"
            ]
        },
        "cret_vsb50": {
            "含义": "十分位规模和五分位账面市值比组合的市值加权累计回报",
            "公式": "cret_vsb50 = (1 + ret_vsb50).cumprod() - 1",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret_vsb50"
            ]
        },
        "bhar_esb25": {
            "含义": "五分位规模和五分位账面市值比组合的BHAR",
            "公式": "bhar_esb25 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_esb25_end + 1) / (cret_esb25_bgn_l1 + 1)",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_esb25_end",
                "cret_esb25_bgn_l1"
            ]
        },
        "bhar_esb50": {
            "含义": "十分位规模和五分位账面市值比组合的BHAR",
            "公式": "bhar_esb50 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_esb50_end + 1) / (cret_esb50_bgn_l1 + 1)",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_esb50_end",
                "cret_esb50_bgn_l1"
            ]
        },
        "bhar_vsb25": {
            "含义": "五分位规模和五分位账面市值比组合的市值加权BHAR",
            "公式": "bhar_vsb25 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_vsb25_end + 1) / (cret_vsb25_bgn_l1 + 1)",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_vsb25_end",
                "cret_vsb25_bgn_l1"
            ]
        },
        "bhar_vsb50": {
            "含义": "十分位规模和五分位账面市值比组合的市值加权BHAR",
            "公式": "bhar_vsb50 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_vsb50_end + 1) / (cret_vsb50_bgn_l1 + 1)",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_vsb50_end",
                "cret_vsb50_bgn_l1"
            ]
        },
        "P": {
            "含义": "调整后的期末价格（Adjusted Price at Period End）",
            "公式": "P = |prc| / cfacpr",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "prc",
                "cfacpr"
            ]
        },
        "TSO": {
            "含义": "调整后的流通股总数（Adjusted Total Shares Outstanding）",
            "公式": "TSO = shrout * cfacshr * 1000",
            "数据库来源": [
                "crsp.msf"
            ],
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "shrout",
                "cfacshr"
            ]
        },
        "BM": {
            "含义": "账面市值比（Book-to-Market Ratio）",
            "公式": "BM = BE / ME",
            "数据库来源": [
                "comp.funda",
                "crsp.msf"
            ],
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "BE",
                "ME"
            ]
        },
        "r_s05": {
            "含义": "五分位规模投资组合（Quintile Size Portfolio）",
            "公式": "基于规模十分位数划分",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "size"
            ]
        },
        "r_s10": {
            "含义": "十分位规模投资组合（Decile Size Portfolio）",
            "公式": "基于规模十分位数划分",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "size"
            ]
        },
        "r_sb25": {
            "含义": "五分位规模和五分位账面市值比投资组合（Size Quintile and BtM Quintile Portfolio）",
            "公式": "r_sb25 = r_s05 × r_s05b05",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "r_s05",
                "r_s05b05"
            ]
        },
        "r_sb50": {
            "含义": "十分位规模和五分位账面市值比投资组合（Size Decile and BtM Quintile Portfolio）",
            "公式": "r_sb50 = r_s10 × r_s10b05",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "r_s10",
                "r_s10b05"
            ]
        },
        "ret_es05": {
            "含义": "等权重五分位规模投资组合收益率（Equal-Weighted Size Quintile Portfolio Return）",
            "公式": "ret_es05 = mean(ret) within size quintile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size"
            ]
        },
        "ret_vs05": {
            "含义": "市值加权五分位规模投资组合收益率（Value-Weighted Size Quintile Portfolio Return）",
            "公式": "ret_vs05 = sum(ret × weight) within size quintile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "weight"
            ]
        },
        "ret_es10": {
            "含义": "等权重十分位规模投资组合收益率（Equal-Weighted Size Decile Portfolio Return）",
            "公式": "ret_es10 = mean(ret) within size decile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size"
            ]
        },
        "ret_vs10": {
            "含义": "市值加权十分位规模投资组合收益率（Value-Weighted Size Decile Portfolio Return）",
            "公式": "ret_vs10 = sum(ret × weight) within size decile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "weight"
            ]
        },
        "ret_esb25": {
            "含义": "等权重五分位规模和五分位账面市值比投资组合收益率（Equal-Weighted Size and BtM Quintile Portfolio Return）",
            "公式": "ret_esb25 = mean(ret) within size and BtM quintile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "BM"
            ]
        },
        "ret_vsb25": {
            "含义": "市值加权五分位规模和五分位账面市值比投资组合收益率（Value-Weighted Size and BtM Quintile Portfolio Return）",
            "公式": "ret_vsb25 = sum(ret × weight) within size and BtM quintile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "BM",
                "weight"
            ]
        },
        "ret_esb50": {
            "含义": "等权重十分位规模和五分位账面市值比投资组合收益率（Equal-Weighted Size and BtM Decile Portfolio Return）",
            "公式": "ret_esb50 = mean(ret) within size and BtM decile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "BM"
            ]
        },
        "ret_vsb50": {
            "含义": "市值加权十分位规模和五分位账面市值比投资组合收益率（Value-Weighted Size and BtM Decile Portfolio Return）",
            "公式": "ret_vsb50 = sum(ret × weight) within size and BtM decile",
            "示例文件": "studio code_Event BHAR_Barber and Lyon1997",
            "用到的变量": [
                "ret",
                "size",
                "BM",
                "weight"
            ]
        }
    },
    "code_transform quarterly to yearly.txt": {
        "io_lg01_v1": {
            "含义": "机构持股比例（1%）第一季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_lg05_v1": {
            "含义": "机构持股比例（5%）第一季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_lg10_v1": {
            "含义": "机构持股比例（10%）第一季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_totl_v1": {
            "含义": "机构总持股比例  第一季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_lg01_v2": {
            "含义": "机构持股比例（1%）第二季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_lg05_v2": {
            "含义": "机构持股比例（5%）第二季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_lg10_v2": {
            "含义": "机构持股比例（10%）第二季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_totl_v2": {
            "含义": "机构总持股比例  第二季度",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        },
        "io_numf": {
            "含义": "机构投资者数量",
            "数据库来源": [
                "inst_vars"
            ],
            "示例文件": "code_transform quarterly to yearly.txt"
        }
    },
    "studio code_yafcnt.txt": {
        "analyst_id": {
            "含义": "分析师标识符，表示分析师的唯一标识符，用于区分不同的分析师。",
            "数据库来源": [
                "ibes.detu_epsus"
            ],
            "示例文件": "studio code_yafcnt.txt"
        },
        "forecast_end_date": {
            "含义": "预测结束日期，表示分析师预测的结束日期，通常是预测所覆盖的时间段的结束点。",
            "数据库来源": [
                "ibes.detu_epsus"
            ],
            "示例文件": "studio code_yafcnt.txt"
        },
        "announcement_date": {
            "含义": "公告日期，表示公司发布财务报告的日期，通常是财务报告正式发布的日期。",
            "数据库来源": [
                "ibes.detu_epsus"
            ],
            "示例文件": "studio code_yafcnt.txt"
        }
    },
    "studio code_ceobase_bdex.txt": {
        "ceo_bdt": {
            "含义": "CEO 任职开始日期",
            "数据库来源": [
                "boardex.na_wrds_dir_profile_emp"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_edt": {
            "含义": "CEO 任职结束日期",
            "数据库来源": [
                "boardex.na_wrds_dir_profile_emp"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_companyid": {
            "含义": "BoardEx 公司标识符",
            "数据库来源": [
                "boardex.na_wrds_dir_profile_emp",
                "wrdsapps.bdxcrspcomplink"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_directorid": {
            "含义": "BoardEx 高管标识符",
            "数据库来源": [
                "boardex.na_wrds_dir_profile_emp",
                "boardex.na_dir_profile_education",
                "boardex.na_dir_profile_details"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_rolename": {
            "含义": "高管职位名称",
            "数据库来源": [
                "boardex.na_wrds_dir_profile_emp"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_Qualification": {
            "含义": "教育资格",
            "数据库来源": [
                "boardex.na_dir_profile_education"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_awarddate": {
            "含义": "授予学位日期",
            "数据库来源": [
                "boardex.na_dir_profile_education"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_dob": {
            "含义": "出生日期",
            "数据库来源": [
                "boardex.na_dir_profile_details"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_gender": {
            "含义": "高管性别",
            "数据库来源": [
                "boardex.na_dir_profile_details"
            ],
            "示例文件": "studio code_ceobase_bdex.txt"
        },
        "ceo_edt_l1": {
            "含义": "上一个记录的 CEO 任职结束日期",
            "公式": "lag(ceo_edt)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "ceo_edt"
            ]
        },
        "ceo_companyid_l1": {
            "含义": "上一个记录的公司标识符",
            "公式": "lag(companyid)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "companyid"
            ]
        },
        "ceo_directorid_l1": {
            "含义": "上一个记录的高管标识符",
            "公式": "lag(directorid)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "directorid"
            ]
        },
        "ceo_companyid_d1": {
            "含义": "再上一个记录的公司标识符",
            "公式": "lag(companyid)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "companyid"
            ]
        },
        "ceo_directorid_d1": {
            "含义": "再上一个记录的高管标识符",
            "公式": "lag(directorid)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "directorid"
            ]
        },
        "ceo_bdt_d1": {
            "含义": "再上一个记录的 CEO 任职开始日期",
            "公式": "lag(ceo_bdt)",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "ceo_bdt"
            ]
        },
        "gap_bdt": {
            "含义": "与上一个记录的任职结束日期的时间间隔",
            "公式": "ceo_bdt-ceo_edt_l1",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "ceo_bdt",
                "ceo_edt_l1"
            ]
        },
        "gap_edt": {
            "含义": "与上上一个记录的任职开始日期的时间间隔",
            "公式": "ceo_bdt_d1-ceo_edt",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "ceo_bdt_d1",
                "ceo_edt"
            ]
        },
        "mark_b": {
            "含义": "调整后的 CEO 任职开始日期",
            "公式": "if gap_bdt=. then mark_b=ceo_bdt;if gap_bdt>7 then mark_b=ceo_bdt;",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "gap_bdt",
                "ceo_bdt"
            ]
        },
        "mark_e": {
            "含义": "调整后的 CEO 任职结束日期",
            "公式": "if gap_edt=. then mark_e=ceo_edt;if gap_edt>7 then mark_e=ceo_edt;",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "gap_edt",
                "ceo_edt"
            ]
        },
        "gvkey_cnt": {
            "含义": "公司对应的gvkey数量",
            "公式": "count(gvkey) group by COMPANYID",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "gvkey",
                "COMPANYID"
            ]
        },
        "dt_bceo": {
            "含义": "CEO的开始时间",
            "公式": "mark_b",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "mark_b"
            ]
        },
        "dt_eceo": {
            "含义": "CEO的结束时间",
            "公式": "min(mark_e), group by companyid,directorid, mark_b",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "mark_e",
                "companyid",
                "directorid",
                "mark_b"
            ]
        },
        "gradadate_a": {
            "含义": "高管的最高学历毕业日期",
            "公式": "awarddate",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "awarddate"
            ]
        },
        "gradadate_b": {
            "含义": "高管的毕业日期（没有则用样本起始日期代替）",
            "公式": "if missing(awarddate) then awarddate='&begdate.'d;gradadate_b=awarddate;",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "awarddate"
            ]
        },
        "yr_dob_bdex": {
            "含义": "高管的出生年份",
            "公式": "substr(dob,len_dob-3,4)*1",
            "示例文件": "studio code_ceobase_bdex.txt",
            "用到的变量": [
                "dob"
            ]
        }
    },
    "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16": {
        "sym_suffix": {
            "含义": "股票代码后缀",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Qu_Cond": {
            "含义": "报价条件",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Qu_Cancel": {
            "含义": "报价取消标志",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_Asksiz": {
            "含义": "最佳卖出量（手）",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_Bidsiz": {
            "含义": "最佳买入量（手）",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Ask": {
            "含义": "卖出价",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Bid": {
            "含义": "买入价",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Asksiz": {
            "含义": "卖出量（手）",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Bidsiz": {
            "含义": "买入量（手）",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Qu_Source": {
            "含义": "报价来源",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "NatBBO_Ind": {
            "含义": "国家最佳买卖报价指示",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Qu_SeqNum": {
            "含义": "报价序列号",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Tr_Corr": {
            "含义": "交易更正标志",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Tr_SeqNum": {
            "含义": "交易序列号",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Spread": {
            "含义": "买卖价差",
            "公式": "Best_Ask - Best_Bid 或 Ask - Bid",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Midpoint": {
            "含义": "买卖价中点",
            "公式": "(Best_Ask + Best_Bid) / 2",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_BidSizeShares": {
            "含义": "最佳买入量（股）",
            "公式": "Best_Bidsiz * 100",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_AskSizeShares": {
            "含义": "最佳卖出量（股）",
            "公式": "Best_Asksiz * 100",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "lmid": {
            "含义": "前一时刻的买卖价中点",
            "公式": "lag(Midpoint)",
            "用到的变量": [
                "Midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "lm25": {
            "含义": "前一时刻买卖价中点 - 2.5",
            "公式": "lmid - 2.5",
            "用到的变量": [
                "lmid"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "lp25": {
            "含义": "前一时刻买卖价中点 + 2.5",
            "公式": "lmid + 2.5",
            "用到的变量": [
                "lmid"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "type": {
            "含义": "数据类型（交易或报价）",
            "公式": "'T' for trade, 'Q' for quote",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "QTime": {
            "含义": "最近一次报价时间",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "NBO": {
            "含义": "最近一次最佳卖出价",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "NBB": {
            "含义": "最近一次最佳买入价",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "NBOqty": {
            "含义": "最近一次最佳卖出量",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "NBBqty": {
            "含义": "最近一次最佳买入量",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "lock": {
            "含义": "是否锁定市场（买卖价相同）",
            "公式": "1 if NBO = NBB, else 0",
            "用到的变量": [
                "NBO",
                "NBB"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "cross": {
            "含义": "是否交叉市场（买价高于卖价）",
            "公式": "1 if NBO < NBB, else 0",
            "用到的变量": [
                "NBO",
                "NBB"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "direction2": {
            "含义": "交易价格方向",
            "公式": "dif(price) after removing zero changes",
            "用到的变量": [
                "price"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "BuySellCLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 交易方向指标",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "inforce": {
            "含义": "报价有效时间",
            "公式": "abs(dif(time_m)) or max((\"16:00:00.000000000\"t-time_m),0)",
            "用到的变量": [
                "time_m"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wQuotedSpread_Dollar": {
            "含义": "时间加权美元报价价差",
            "公式": "(Best_Ask - Best_Bid) * inforce",
            "用到的变量": [
                "Best_Ask",
                "Best_Bid",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wQuotedSpread_Percent": {
            "含义": "时间加权百分比报价价差",
            "公式": "(log(Best_Ask) - log(Best_Bid)) * inforce",
            "用到的变量": [
                "Best_Ask",
                "Best_Bid",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wBestOfrDepth_Dollar": {
            "含义": "时间加权最佳卖出美元深度",
            "公式": "Best_Ask * Best_AskSizeShares * inforce",
            "用到的变量": [
                "Best_Ask",
                "Best_AskSizeShares",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wBestBidDepth_Dollar": {
            "含义": "时间加权最佳买入美元深度",
            "公式": "Best_Bid * Best_BidSizeShares * inforce",
            "用到的变量": [
                "Best_Bid",
                "Best_BidSizeShares",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wBestOfrDepth_Share": {
            "含义": "时间加权最佳卖出股票深度",
            "公式": "Best_AskSizeShares * inforce",
            "用到的变量": [
                "Best_AskSizeShares",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wBestBidDepth_Share": {
            "含义": "时间加权最佳买入股票深度",
            "公式": "Best_BidSizeShares * inforce",
            "用到的变量": [
                "Best_BidSizeShares",
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "sumtime": {
            "含义": "报价有效总时间",
            "公式": "sum(inforce)",
            "用到的变量": [
                "inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swQuotedSpread_Dollar": {
            "含义": "报价价差（美元）时间加权总和",
            "公式": "sum(wQuotedSpread_Dollar)",
            "用到的变量": [
                "wQuotedSpread_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swQuotedSpread_Percent": {
            "含义": "报价价差（百分比）时间加权总和",
            "公式": "sum(wQuotedSpread_Percent)",
            "用到的变量": [
                "wQuotedSpread_Percent"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swBestOfrDepth_Dollar": {
            "含义": "最佳卖出深度（美元）时间加权总和",
            "公式": "sum(wBestOfrDepth_Dollar)",
            "用到的变量": [
                "wBestOfrDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swBestBidDepth_Dollar": {
            "含义": "最佳买入深度（美元）时间加权总和",
            "公式": "sum(wBestBidDepth_Dollar)",
            "用到的变量": [
                "wBestBidDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swBestOfrDepth_Share": {
            "含义": "最佳卖出深度（股）时间加权总和",
            "公式": "sum(wBestOfrDepth_Share)",
            "用到的变量": [
                "wBestOfrDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "swBestBidDepth_Share": {
            "含义": "最佳买入深度（股）时间加权总和",
            "公式": "sum(wBestBidDepth_Share)",
            "用到的变量": [
                "wBestBidDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "QuotedSpread_Dollar": {
            "含义": "时间加权平均美元报价价差",
            "公式": "swQuotedSpread_Dollar / sumtime",
            "用到的变量": [
                "swQuotedSpread_Dollar",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "QuotedSpread_Percent": {
            "含义": "时间加权平均百分比报价价差",
            "公式": "swQuotedSpread_Percent / sumtime",
            "用到的变量": [
                "swQuotedSpread_Percent",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "BestOfrDepth_Dollar": {
            "含义": "时间加权平均最佳卖出美元深度",
            "公式": "swBestOfrDepth_Dollar / sumtime",
            "用到的变量": [
                "swBestOfrDepth_Dollar",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "BestBidDepth_Dollar": {
            "含义": "时间加权平均最佳买入美元深度",
            "公式": "swBestBidDepth_Dollar / sumtime",
            "用到的变量": [
                "swBestBidDepth_Dollar",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "BestOfrDepth_Share": {
            "含义": "时间加权平均最佳卖出股票深度",
            "公式": "swBestOfrDepth_Share / sumtime",
            "用到的变量": [
                "swBestOfrDepth_Share",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "BestBidDepth_Share": {
            "含义": "时间加权平均最佳买入股票深度",
            "公式": "swBestBidDepth_Share / sumtime",
            "用到的变量": [
                "swBestBidDepth_Share",
                "sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Dollar": {
            "含义": "有效价差（美元）",
            "公式": "abs(price - midpoint) * 2",
            "用到的变量": [
                "price",
                "midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Percent": {
            "含义": "有效价差（百分比）",
            "公式": "abs(log(price) - log(midpoint)) * 2",
            "用到的变量": [
                "price",
                "midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "dollar": {
            "含义": "交易额",
            "公式": "price * size",
            "用到的变量": [
                "price",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）",
            "公式": "wEffectiveSpread_Dollar * dollar",
            "用到的变量": [
                "wEffectiveSpread_Dollar",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）",
            "公式": "wEffectiveSpread_Dollar * size",
            "用到的变量": [
                "wEffectiveSpread_Dollar",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）",
            "公式": "wEffectiveSpread_Percent * dollar",
            "用到的变量": [
                "wEffectiveSpread_Percent",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wEffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）",
            "公式": "wEffectiveSpread_Percent * size",
            "用到的变量": [
                "wEffectiveSpread_Percent",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "sumdollar": {
            "含义": "交易额总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "sumsize": {
            "含义": "交易量总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Dollar_Ave": {
            "含义": "平均有效价差（美元）",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Percent_Ave": {
            "含义": "平均有效价差（百分比）",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waEffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waEffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waEffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waEffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）",
            "公式": "waEffectiveSpread_Dollar_DW / sumdollar",
            "用到的变量": [
                "waEffectiveSpread_Dollar_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）",
            "公式": "waEffectiveSpread_Dollar_SW / sumsize",
            "用到的变量": [
                "waEffectiveSpread_Dollar_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）",
            "公式": "waEffectiveSpread_Percent_DW / sumdollar",
            "用到的变量": [
                "waEffectiveSpread_Percent_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "EffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）",
            "公式": "waEffectiveSpread_Percent_SW / sumsize",
            "用到的变量": [
                "waEffectiveSpread_Percent_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "midpoint5": {
            "含义": "5分钟后的买卖价中点",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_Ask5": {
            "含义": "5分钟后的最佳卖出价",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "Best_Bid5": {
            "含义": "5分钟后的最佳买入价",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarRealizedSpread_CLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元实现价差",
            "公式": "BuySellCLNV * (price - midpoint5) * 2",
            "用到的变量": [
                "BuySellCLNV",
                "price",
                "midpoint5"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentRealizedSpread_CLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 百分比实现价差",
            "公式": "BuySellCLNV * (log(price) - log(midpoint5)) * 2",
            "用到的变量": [
                "BuySellCLNV",
                "price",
                "midpoint5"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarPriceImpact_CLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元价格冲击",
            "公式": "BuySellCLNV * (midpoint5 - midpoint) * 2",
            "用到的变量": [
                "BuySellCLNV",
                "midpoint5",
                "midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentPriceImpact_CLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 百分比价格冲击",
            "公式": "BuySellCLNV * (log(midpoint5) - log(midpoint)) * 2",
            "用到的变量": [
                "BuySellCLNV",
                "midpoint5",
                "midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元实现价差",
            "公式": "wDollarRealizedSpread_CLNV * size",
            "用到的变量": [
                "wDollarRealizedSpread_CLNV",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "size": {
            "含义": "交易量",
            "数据库来源": [
                "taqms"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元实现价差",
            "公式": "wDollarRealizedSpread_CLNV * dollar",
            "用到的变量": [
                "wDollarRealizedSpread_CLNV",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比实现价差",
            "公式": "wPercentRealizedSpread_CLNV * size",
            "用到的变量": [
                "wPercentRealizedSpread_CLNV",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比实现价差",
            "公式": "wPercentRealizedSpread_CLNV * dollar",
            "用到的变量": [
                "wPercentRealizedSpread_CLNV",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元价格冲击",
            "公式": "wDollarPriceImpact_CLNV * size",
            "用到的变量": [
                "wDollarPriceImpact_CLNV",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wDollarPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元价格冲击",
            "公式": "wDollarPriceImpact_CLNV * dollar",
            "用到的变量": [
                "wDollarPriceImpact_CLNV",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比价格冲击",
            "公式": "wPercentPriceImpact_CLNV * size",
            "用到的变量": [
                "wPercentPriceImpact_CLNV",
                "size"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "wPercentPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比价格冲击",
            "公式": "wPercentPriceImpact_CLNV * dollar",
            "用到的变量": [
                "wPercentPriceImpact_CLNV",
                "dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarRealizedSpread_CLNV_Ave": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 平均美元实现价差",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentRealizedSpread_CLNV_Ave": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 平均百分比实现价差",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarPriceImpact_CLNV_Ave": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 平均美元价格冲击",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentPriceImpact_CLNV_Ave": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 平均百分比价格冲击",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waDollarRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元实现价差总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waDollarRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元实现价差总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waPercentRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比实现价差总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waPercentRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比实现价差总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waDollarPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元价格冲击总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waDollarPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元价格冲击总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waPercentPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比价格冲击总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "waPercentPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比价格冲击总和",
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元实现价差",
            "公式": "waDollarRealizedSpread_CLNV_SW / sumsize",
            "用到的变量": [
                "waDollarRealizedSpread_CLNV_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元实现价差",
            "公式": "waDollarRealizedSpread_CLNV_DW / sumdollar",
            "用到的变量": [
                "waDollarRealizedSpread_CLNV_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentRealizedSpread_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比实现价差",
            "公式": "waPercentRealizedSpread_CLNV_SW / sumsize",
            "用到的变量": [
                "waPercentRealizedSpread_CLNV_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentRealizedSpread_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比实现价差",
            "公式": "waPercentRealizedSpread_CLNV_DW / sumdollar",
            "用到的变量": [
                "waPercentRealizedSpread_CLNV_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权美元价格冲击",
            "公式": "waDollarPriceImpact_CLNV_SW / sumsize",
            "用到的变量": [
                "waDollarPriceImpact_CLNV_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "DollarPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权美元价格冲击",
            "公式": "waDollarPriceImpact_CLNV_DW / sumdollar",
            "用到的变量": [
                "waDollarPriceImpact_CLNV_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentPriceImpact_CLNV_SW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 股票加权百分比价格冲击",
            "公式": "waPercentPriceImpact_CLNV_SW / sumsize",
            "用到的变量": [
                "waPercentPriceImpact_CLNV_SW",
                "sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        },
        "PercentPriceImpact_CLNV_DW": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 美元加权百分比价格冲击",
            "公式": "waPercentPriceImpact_CLNV_DW / sumdollar",
            "用到的变量": [
                "waPercentPriceImpact_CLNV_DW",
                "sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16"
        }
    },
    "studio code_qfunvar": {
        "act": {
            "含义": "总流动资产",
            "数据库": "comp.funda",
            "示例文件": "studio code_qfunvar"
        }
    },
    "studio code_lgseg": {
        "SRCDATE": {
            "含义": "分部报告的披露日期",
            "数据库来源": [
                "compd.wrds_seg_customer"
            ],
            "示例文件": "studio code_lgseg"
        },
        "seg_id": {
            "含义": "Compustat分部唯一标识符",
            "数据库来源": [
                "compd.wrds_seg_customer"
            ],
            "示例文件": "studio code_lgseg"
        },
        "STYPE": {
            "含义": "分部类型（如：业务分部、地区分部、运营分部）",
            "数据库来源": [
                "compd.wrds_seg_customer"
            ],
            "示例文件": "studio code_lgseg"
        },
        "branch_cnt": {
            "含义": "公司在特定日期披露的分部数量",
            "公式": "count(seg_id)",
            "示例文件": "studio code_lgseg",
            "用到的变量": [
                "seg_id"
            ]
        }
    },
    "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16": {
        "mtaq_spr": {
            "含义": "买卖价差",
            "公式": "OFR - BID",
            "用到的变量": [
                "mtaq_OFR",
                "mtaq_BID"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_J": {
            "含义": "秒内报价序号",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_N": {
            "含义": "秒内报价总数",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_InterpolatedTime": {
            "含义": "插值时间",
            "公式": "time + ((2*J-1)/(2*N))",
            "用到的变量": [
                "mtaq_time",
                "mtaq_J",
                "mtaq_N"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_I": {
            "含义": "秒内交易序号",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestBid": {
            "含义": "最佳买入价",
            "公式": "max(of exbidR1-exbidR&i)",
            "用到的变量": [],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestOfr": {
            "含义": "最佳卖出价",
            "公式": "min(of exofrR1-exofrR&i)",
            "用到的变量": [],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxBidDepth": {
            "含义": "最大买入深度",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxOfrDepth": {
            "含义": "最大卖出深度",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalBidDepth": {
            "含义": "总买入深度",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalOfrDepth": {
            "含义": "总卖出深度",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_type": {
            "含义": "数据类型（交易或报价）",
            "公式": "'T' for trade, 'Q' for quote",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_quotetime": {
            "含义": "最近一次报价时间",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestOfr2": {
            "含义": "最近一次最佳卖出价",
            "公式": "从 CompleteNBBO 数据集中提取的 BestOfr",
            "用到的变量": [
                "mtaq_BestOfr"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestBid2": {
            "含义": "最近一次最佳买入价",
            "公式": "从 CompleteNBBO 数据集中提取的 BestBid",
            "用到的变量": [
                "mtaq_BestBid"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxOfrDepth2": {
            "含义": "最近一次最大卖出深度",
            "公式": "从 CompleteNBBO 数据集中提取的 MaxOfrDepth",
            "用到的变量": [
                "mtaq_MaxOfrDepth"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxBidDepth2": {
            "含义": "最近一次最大买入深度",
            "公式": "从 CompleteNBBO 数据集中提取的 MaxBidDepth",
            "用到的变量": [
                "mtaq_MaxBidDepth"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalOfrDepth2": {
            "含义": "最近一次总卖出深度",
            "公式": "从 CompleteNBBO 数据集中提取的 TotalOfrDepth",
            "用到的变量": [
                "mtaq_TotalOfrDepth"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalBidDepth2": {
            "含义": "最近一次总买入深度",
            "公式": "从 CompleteNBBO 数据集中提取的 TotalBidDepth",
            "用到的变量": [
                "mtaq_TotalBidDepth"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_midpoint": {
            "含义": "买卖价中点",
            "公式": "(BestOfr2+BestBid2)/2",
            "用到的变量": [
                "mtaq_BestOfr2",
                "mtaq_BestBid2"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_lock": {
            "含义": "是否锁定市场（买卖价相同）",
            "公式": "1 if BestOfr2=BestBid2, else 0",
            "用到的变量": [
                "mtaq_BestOfr2",
                "mtaq_BestBid2"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_cross": {
            "含义": "是否交叉市场（买价高于卖价）",
            "公式": "1 if BestOfr2<BestBid2, else 0",
            "用到的变量": [
                "mtaq_BestOfr2",
                "mtaq_BestBid2"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_direction": {
            "含义": "交易价格方向",
            "公式": "dif(price)",
            "用到的变量": [
                "mtaq_price"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_direction2": {
            "含义": "交易价格方向",
            "公式": "if direction ne 0 then direction2=direction; else direction2=direction2",
            "用到的变量": [
                "mtaq_direction"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BuySellCLNV": {
            "含义": "Chakrabarty, Li, Nguyen, & Van Ness (2006) 交易方向指标",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_inforce": {
            "含义": "报价有效时间",
            "公式": "abs(dif(InterpolatedTime)) or max((end-InterpolatedTime),0)",
            "用到的变量": [
                "mtaq_InterpolatedTime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wQuotedSpread_Dollar": {
            "含义": "时间加权美元报价价差",
            "公式": "(BestOfr-BestBid)*inforce",
            "用到的变量": [
                "mtaq_BestOfr",
                "mtaq_BestBid",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wQuotedSpread_Percent": {
            "含义": "时间加权百分比报价价差",
            "公式": "(log(BestOfr)-log(BestBid))*inforce",
            "用到的变量": [
                "mtaq_BestOfr",
                "mtaq_BestBid",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wTotalOfrDepth_Dollar": {
            "含义": "时间加权总卖出美元深度",
            "公式": "BestOfr*TotalOfrDepth*inforce",
            "用到的变量": [
                "mtaq_BestOfr",
                "mtaq_TotalOfrDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wTotalBidDepth_Dollar": {
            "含义": "时间加权总买入美元深度",
            "公式": "BestBid*TotalBidDepth*inforce",
            "用到的变量": [
                "mtaq_BestBid",
                "mtaq_TotalBidDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wTotalOfrDepth_Share": {
            "含义": "时间加权总卖出股票深度",
            "公式": "TotalOfrDepth*inforce",
            "用到的变量": [
                "mtaq_TotalOfrDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wTotalBidDepth_Share": {
            "含义": "时间加权总买入股票深度",
            "公式": "TotalBidDepth*inforce",
            "用到的变量": [
                "mtaq_TotalBidDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wMaxOfrDepth_Dollar": {
            "含义": "时间加权最大卖出美元深度",
            "公式": "BestOfr*MaxOfrDepth*inforce",
            "用到的变量": [
                "mtaq_BestOfr",
                "mtaq_MaxOfrDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wMaxBidDepth_Dollar": {
            "含义": "时间加权最大买入美元深度",
            "公式": "BestBid*MaxBidDepth*inforce",
            "用到的变量": [
                "mtaq_BestBid",
                "mtaq_MaxBidDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wMaxOfrDepth_Share": {
            "含义": "时间加权最大卖出股票深度",
            "公式": "MaxOfrDepth*inforce",
            "用到的变量": [
                "mtaq_MaxOfrDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wMaxBidDepth_Share": {
            "含义": "时间加权最大买入股票深度",
            "公式": "MaxBidDepth*inforce",
            "用到的变量": [
                "mtaq_MaxBidDepth",
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_sumtime": {
            "含义": "报价有效总时间",
            "公式": "sum(inforce)",
            "用到的变量": [
                "mtaq_inforce"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swQuotedSpread_Dollar": {
            "含义": "报价价差（美元）时间加权总和",
            "公式": "sum(wQuotedSpread_Dollar)",
            "用到的变量": [
                "mtaq_wQuotedSpread_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swQuotedSpread_Percent": {
            "含义": "报价价差（百分比）时间加权总和",
            "公式": "sum(wQuotedSpread_Percent)",
            "用到的变量": [
                "mtaq_wQuotedSpread_Percent"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swTotalOfrDepth_Dollar": {
            "含义": "总卖出深度（美元）时间加权总和",
            "公式": "sum(wTotalOfrDepth_Dollar)",
            "用到的变量": [
                "mtaq_wTotalOfrDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swTotalBidDepth_Dollar": {
            "含义": "总买入深度（美元）时间加权总和",
            "公式": "sum(wTotalBidDepth_Dollar)",
            "用到的变量": [
                "mtaq_wTotalBidDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swTotalOfrDepth_Share": {
            "含义": "总卖出深度（股）时间加权总和",
            "公式": "sum(wTotalOfrDepth_Share)",
            "用到的变量": [
                "mtaq_wTotalOfrDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swTotalBidDepth_Share": {
            "含义": "总买入深度（股）时间加权总和",
            "公式": "sum(wTotalBidDepth_Share)",
            "用到的变量": [
                "mtaq_wTotalBidDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swMaxOfrDepth_Dollar": {
            "含义": "最大卖出深度（美元）时间加权总和",
            "公式": "sum(wMaxOfrDepth_Dollar)",
            "用到的变量": [
                "mtaq_wMaxOfrDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swMaxBidDepth_Dollar": {
            "含义": "最大买入深度（美元）时间加权总和",
            "公式": "sum(wMaxBidDepth_Dollar)",
            "用到的变量": [
                "mtaq_wMaxBidDepth_Dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swMaxOfrDepth_Share": {
            "含义": "最大卖出深度（股）时间加权总和",
            "公式": "sum(wMaxOfrDepth_Share)",
            "用到的变量": [
                "mtaq_wMaxOfrDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_swMaxBidDepth_Share": {
            "含义": "最大买入深度（股）时间加权总和",
            "公式": "sum(wMaxBidDepth_Share)",
            "用到的变量": [
                "mtaq_wMaxBidDepth_Share"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_QuotedSpread_Dollar": {
            "含义": "时间加权平均美元报价价差",
            "公式": "swQuotedSpread_Dollar/sumtime",
            "用到的变量": [
                "mtaq_swQuotedSpread_Dollar",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_QuotedSpread_Percent": {
            "含义": "时间加权平均百分比报价价差",
            "公式": "swQuotedSpread_Percent/sumtime",
            "用到的变量": [
                "mtaq_swQuotedSpread_Percent",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalOfrDepth_Dollar": {
            "含义": "时间加权平均总卖出美元深度",
            "公式": "swTotalOfrDepth_Dollar/sumtime",
            "用到的变量": [
                "mtaq_swTotalOfrDepth_Dollar",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalBidDepth_Dollar": {
            "含义": "时间加权平均总买入美元深度",
            "公式": "swTotalBidDepth_Dollar/sumtime",
            "用到的变量": [
                "mtaq_swTotalBidDepth_Dollar",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalOfrDepth_Share": {
            "含义": "时间加权平均总卖出股票深度",
            "公式": "swTotalOfrDepth_Share/sumtime",
            "用到的变量": [
                "mtaq_swTotalOfrDepth_Share",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_TotalBidDepth_Share": {
            "含义": "时间加权平均总买入股票深度",
            "公式": "swTotalBidDepth_Share/sumtime",
            "用到的变量": [
                "mtaq_swTotalBidDepth_Share",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxOfrDepth_Dollar": {
            "含义": "时间加权平均最大卖出美元深度",
            "公式": "swMaxOfrDepth_Dollar/sumtime",
            "用到的变量": [
                "mtaq_swMaxOfrDepth_Dollar",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxBidDepth_Dollar": {
            "含义": "时间加权平均最大买入美元深度",
            "公式": "swMaxBidDepth_Dollar/sumtime",
            "用到的变量": [
                "mtaq_swMaxBidDepth_Dollar",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxOfrDepth_Share": {
            "含义": "时间加权平均最大卖出股票深度",
            "公式": "swMaxOfrDepth_Share/sumtime",
            "用到的变量": [
                "mtaq_swMaxOfrDepth_Share",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_MaxBidDepth_Share": {
            "含义": "时间加权平均最大买入股票深度",
            "公式": "swMaxBidDepth_Share/sumtime",
            "用到的变量": [
                "mtaq_swMaxBidDepth_Share",
                "mtaq_sumtime"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Dollar": {
            "含义": "有效价差（美元）",
            "公式": "abs(price-midpoint)*2",
            "用到的变量": [
                "mtaq_price",
                "mtaq_midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Percent": {
            "含义": "有效价差（百分比）",
            "公式": "abs(log(price)-log(midpoint))*2",
            "用到的变量": [
                "mtaq_price",
                "mtaq_midpoint"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_dollar": {
            "含义": "交易额",
            "公式": "price*size",
            "用到的变量": [
                "mtaq_price",
                "mtaq_size"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）",
            "公式": "wEffectiveSpread_Dollar*dollar",
            "用到的变量": [
                "mtaq_wEffectiveSpread_Dollar",
                "mtaq_dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）",
            "公式": "wEffectiveSpread_Dollar*size",
            "用到的变量": [
                "mtaq_wEffectiveSpread_Dollar",
                "mtaq_size"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）",
            "公式": "wEffectiveSpread_Percent*dollar",
            "用到的变量": [
                "mtaq_wEffectiveSpread_Percent",
                "mtaq_dollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_wEffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）",
            "公式": "wEffectiveSpread_Percent*size",
            "用到的变量": [
                "mtaq_wEffectiveSpread_Percent",
                "mtaq_size"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_sumdollar": {
            "含义": "交易额总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_sumsize": {
            "含义": "交易量总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Dollar_Ave": {
            "含义": "平均有效价差（美元）",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Percent_Ave": {
            "含义": "平均有效价差（百分比）",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_waEffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_waEffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_waEffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_waEffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）总和",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Dollar_DW": {
            "含义": "美元加权有效价差（美元）",
            "公式": "waEffectiveSpread_Dollar_DW / sumdollar",
            "用到的变量": [
                "mtaq_waEffectiveSpread_Dollar_DW",
                "mtaq_sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Dollar_SW": {
            "含义": "股票加权有效价差（美元）",
            "公式": "waEffectiveSpread_Dollar_SW / sumsize",
            "用到的变量": [
                "mtaq_waEffectiveSpread_Dollar_SW",
                "mtaq_sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Percent_DW": {
            "含义": "美元加权有效价差（百分比）",
            "公式": "waEffectiveSpread_Percent_DW / sumdollar",
            "用到的变量": [
                "mtaq_waEffectiveSpread_Percent_DW",
                "mtaq_sumdollar"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_EffectiveSpread_Percent_SW": {
            "含义": "股票加权有效价差（百分比）",
            "公式": "waEffectiveSpread_Percent_SW / sumsize",
            "用到的变量": [
                "mtaq_waEffectiveSpread_Percent_SW",
                "mtaq_sumsize"
            ],
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_midpoint5": {
            "含义": "5分钟后的买卖价中点",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestOfr5": {
            "含义": "5分钟后的最佳卖出价",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        },
        "mtaq_BestBid5": {
            "含义": "5分钟后的最佳买入价",
            "示例文件": "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16"
        }
    },
    "studio code_bharmkt_evt20211018": {
        "ewretd": {
            "含义": "等权重市场收益率",
            "数据库来源": [
                "crsp.msi"
            ],
            "示例文件": "studio code_bharmkt_evt20211018"
        },
        "sprtrn": {
            "含义": "S&P 500 收益率",
            "数据库来源": [
                "crsp.msi"
            ],
            "示例文件": "studio code_bharmkt_evt20211018"
        },
        "cret": {
            "含义": "累积收益率",
            "公式": "cret = (1 + ret).cumprod() - 1",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "ret"
            ]
        },
        "cret_emkt": {
            "含义": "等权重市场累积收益率",
            "公式": "cret_emkt = (1 + ewretd).cumprod() - 1",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "ewretd"
            ]
        },
        "cret_vmkt": {
            "含义": "市值加权市场累积收益率",
            "公式": "cret_vmkt = (1 + vwretd).cumprod() - 1",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "vwretd"
            ]
        },
        "cret_msp5": {
            "含义": "S&P 500 累积收益率",
            "公式": "cret_msp5 = (1 + sprtrn).cumprod() - 1",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "sprtrn"
            ]
        },
        "bhar_emkt": {
            "含义": "等权重市场调整后的累积超额收益",
            "公式": "bhar_emkt = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_emkt_end + 1) / (cret_emkt_bgn_l1 + 1)",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_emkt_end",
                "cret_emkt_bgn_l1"
            ]
        },
        "bhar_vmkt": {
            "含义": "市值加权市场调整后的累积超额收益",
            "公式": "bhar_vmkt = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_vmkt_end + 1) / (cret_vmkt_bgn_l1 + 1)",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_vmkt_end",
                "cret_vmkt_bgn_l1"
            ]
        },
        "bhar_msp5": {
            "含义": "S&P 500 调整后的累积超额收益",
            "公式": "bhar_msp5 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_msp5_end + 1) / (cret_msp5_bgn_l1 + 1)",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_msp5_end",
                "cret_msp5_bgn_l1"
            ]
        },
        "cret_end": {
            "含义": "累积收益率的结束值",
            "公式": "cret_end = cret 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret"
            ]
        },
        "cret_bgn_l1": {
            "含义": "累积收益率的起始值（滞后一期）",
            "公式": "cret_bgn_l1 = cret 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret"
            ]
        },
        "cret_emkt_end": {
            "含义": "等权重市场累积收益率的结束值",
            "公式": "cret_emkt_end = cret_emkt 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_emkt"
            ]
        },
        "cret_emkt_bgn_l1": {
            "含义": "等权重市场累积收益率的起始值（滞后一期）",
            "公式": "cret_emkt_bgn_l1 = cret_emkt 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_emkt"
            ]
        },
        "cret_vmkt_end": {
            "含义": "市值加权市场累积收益率的结束值",
            "公式": "cret_vmkt_end = cret_vmkt 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vmkt"
            ]
        },
        "cret_vmkt_bgn_l1": {
            "含义": "市值加权市场累积收益率的起始值（滞后一期）",
            "公式": "cret_vmkt_bgn_l1 = cret_vmkt 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vmkt"
            ]
        },
        "cret_msp5_end": {
            "含义": "S&P 500 累积收益率的结束值",
            "公式": "cret_msp5_end = cret_msp5 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_msp5"
            ]
        },
        "cret_msp5_bgn_l1": {
            "含义": "S&P 500 累积收益率的起始值（滞后一期）",
            "公式": "cret_msp5_bgn_l1 = cret_msp5 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_msp5"
            ]
        },
        "cret_es05_end": {
            "含义": "五分位规模组合的累积收益率的结束值",
            "公式": "cret_es05_end = cret_es05 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_es05"
            ]
        },
        "cret_es05_bgn_l1": {
            "含义": "五分位规模组合的累积收益率的起始值（滞后一期）",
            "公式": "cret_es05_bgn_l1 = cret_es05 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_es05"
            ]
        },
        "cret_es10_end": {
            "含义": "十分位规模组合的累积收益率的结束值",
            "公式": "cret_es10_end = cret_es10 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_es10"
            ]
        },
        "cret_es10_bgn_l1": {
            "含义": "十分位规模组合的累积收益率的起始值（滞后一期）",
            "公式": "cret_es10_bgn_l1 = cret_es10 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_es10"
            ]
        },
        "cret_vs05_end": {
            "含义": "五分位规模组合的市值加权累积收益率的结束值",
            "公式": "cret_vs05_end = cret_vs05 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vs05"
            ]
        },
        "cret_vs05_bgn_l1": {
            "含义": "五分位规模组合的市值加权累积收益率的起始值（滞后一期）",
            "公式": "cret_vs05_bgn_l1 = cret_vs05 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vs05"
            ]
        },
        "cret_vs10_end": {
            "含义": "十分位规模组合的市值加权累积收益率的结束值",
            "公式": "cret_vs10_end = cret_vs10 在事件窗口结束时的值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vs10"
            ]
        },
        "cret_vs10_bgn_l1": {
            "含义": "十分位规模组合的市值加权累积收益率的起始值（滞后一期）",
            "公式": "cret_vs10_bgn_l1 = cret_vs10 在事件窗口开始时的滞后值",
            "示例文件": "studio code_bharmkt_evt20211018",
            "用到的变量": [
                "cret_vs10"
            ]
        }
    },
    "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)": {
        "bhar_es05": {
            "含义": "五分位规模组合的BHAR",
            "公式": "bhar_es05 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_es05_end + 1) / (cret_es05_bgn_l1 + 1)",
            "示例文件": "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_es05_end",
                "cret_es05_bgn_l1"
            ]
        },
        "bhar_es10": {
            "含义": "十分位规模组合的BHAR",
            "公式": "bhar_es10 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_es10_end + 1) / (cret_es10_bgn_l1 + 1)",
            "示例文件": "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_es10_end",
                "cret_es10_bgn_l1"
            ]
        },
        "bhar_vs05": {
            "含义": "五分位规模组合的市值加权BHAR",
            "公式": "bhar_vs05 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_vs05_end + 1) / (cret_vs05_bgn_l1 + 1)",
            "示例文件": "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_vs05_end",
                "cret_vs05_bgn_l1"
            ]
        },
        "bhar_vs10": {
            "含义": "十分位规模组合的市值加权BHAR",
            "公式": "bhar_vs10 = (cret_end + 1) / (cret_bgn_l1 + 1) - (cret_vs10_end + 1) / (cret_vs10_bgn_l1 + 1)",
            "示例文件": "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)",
            "用到的变量": [
                "cret_end",
                "cret_bgn_l1",
                "cret_vs10_end",
                "cret_vs10_bgn_l1"
            ]
        }
    },
    "studio code_qfunvar.txt": {
        "oibdpq": {
            "含义": "季度营业利润",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "oiadpq": {
            "含义": "季度营业利润（调整后）",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "xoprq": {
            "含义": "季度营业费用",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "seqq": {
            "含义": "季度股东权益",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "invtq": {
            "含义": "季度存货",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "rectq": {
            "含义": "季度应收账款",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "spiq": {
            "含义": "季度特殊项目",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "ltq": {
            "含义": "季度总负债",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "req": {
            "含义": "季度留存收益",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "pstkrq": {
            "含义": "季度优先股赎回价值",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "pstkq": {
            "含义": "季度优先股账面价值",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "txditcq": {
            "含义": "季度递延所得税",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "lctq": {
            "含义": "季度流动负债",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "cheq": {
            "含义": "季度现金",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "txpq": {
            "含义": "季度所得税费用",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "xrdq": {
            "含义": "季度研发支出",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "capxq": {
            "含义": "季度资本支出",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "sppeq": {
            "含义": "季度固定资产(compustat)",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "dpq": {
            "含义": "季度折旧",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "coq": {
            "含义": "季度其他流动资产",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "apq": {
            "含义": "季度应付账款",
            "数据库来源": [
                "comp.fundq"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "std_roa1_2": {
            "含义": "滚动标准差(roa1, 过去12个季度)",
            "数据库来源": [
                "计算得出"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "std_sale1_2": {
            "含义": "滚动标准差(sale1,过去12个季度)",
            "使用的变量": [
                "sale"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "std_ocf1_2": {
            "含义": "滚动标准差(ocf1,过去12个季度)",
            "使用的变量": [
                "ocf"
            ],
            "示例文件": "studio code_qfunvar.txt"
        },
        "ar_roa1_2": {
            "含义": "AR(1)系数(roa1, 过去12个季度)",
            "数据库来源": [
                "计算得出"
            ],
            "示例文件": "studio code_qfunvar.txt"
        }
    },
    "studio code_abnormal spread": {
        "d_espdp_aw": {
            "含义": "平均有效价差（百分比）",
            "数据库来源": [
                "srca.wrds_taqms_iid"
            ],
            "示例文件": "studio code_abnormal spread"
        },
        "d_espdp_dw": {
            "含义": "美元加权有效价差（百分比）",
            "数据库来源": [
                "srca.wrds_taqms_iid"
            ],
            "示例文件": "studio code_abnormal spread"
        },
        "d_espdp_sw": {
            "含义": "股票加权有效价差（百分比）",
            "数据库来源": [
                "srca.wrds_taqms_iid"
            ],
            "示例文件": "studio code_abnormal spread"
        },
        "c_espdp_aw": {
            "含义": "累计平均有效价差（百分比）",
            "公式": "cusum(d_espdp_aw)",
            "示例文件": "studio code_abnormal spread",
            "用到的变量": [
                "d_espdp_aw"
            ]
        },
        "c_espdp_dw": {
            "含义": "累计美元加权有效价差（百分比）",
            "公式": "cusum(d_espdp_dw)",
            "示例文件": "studio code_abnormal spread",
            "用到的变量": [
                "d_espdp_dw"
            ]
        },
        "c_espdp_sw": {
            "含义": "累计股票加权有效价差（百分比）",
            "公式": "cusum(d_espdp_sw)",
            "示例文件": "studio code_abnormal spread",
            "用到的变量": [
                "d_espdp_sw"
            ]
        }
    }
};


const databaseToVariables = {
    // 已有数据库映射（保持不变）
    "comp.funda": [
        "gvkey", "fyear", "at", "sale", "PRCC_C", "PRCC_F", "CIK", "fyenddt", "fyr","SEQ","PSTKRV","PSTKL","TXDB","ITCB","saleq","ib",
        "oibdp",
        "oiadp",
        "ebitda",
        "ebit",
        "xopr",
        "dltt",
        "ppent",
        "dp",
        "txditc",
        "lct",
        "che",
        "txp",
        "xrd",
        "capx",
        "sppe",
        "oancf",
        "aco",
        "ap",
        "lco",
        "act",
         "ATQ", "PRCCQ", "IBQ", "SPIQ", "DVPQ", "RECTQ", 
        "INVTQ",  "ACOQ", "APQ", "LCOQ", "DPQ", "PPENTQ", "INTANQ", 
        "ALTOQ", "LOQ", "CEQQ"

        
    ],
    "crsp.ccmxpf_lnkhist": [
        "permno"
    ],
    "crsp.msf": [
        "ret", "vol", "shrout","cfacpr","cfaxshr","prc"
    ],
    "crsp.msi": [
        "vwretd", "ewretd", "sprtrn"  // 新增 ewretd 和 sprtrn
    ],
    "crsp.stocknames": [
        "exchcd", "nameenddt", "namedt"
    ],
    "COMP.CO_INDUSTRY": [
        "sich"
    ],
    "execcomp.anncomp": [
        "coperol", "execid", "exec_fullname", "salary", "bonus", "tdc1", 
        "option_awards_num", "option_awards_blk_value", "opts_vested_num", 
        "opts_unvested_num", "opts_exercised_num", "shrown", "shrowntotal"
    ],
    "execcomp.codirfin": [
        "prccf", "shrsout", "divyield", "bs_volatility", "bs_yield"
    ],
    "execcomp.stgrttab": [
        "expric", "mktpric", "numsecur", "exdate", "blkshval"
    ],
    "frb.rates_daily": [
        "rfc"
    ],
    "audit.auditlegal": [
        "legal_case_key", "CASE_START_DATE_S", "CASE_END_DATE_S", 
        "PLAINTIFF", "DEFENDANT", "SETTLEMENT_AMT", "is_category_type_X"
    ],
    "srca.comp_crsp": [
        "gvkey", "fyearq"
    ],
    "srca.eptret": [
        "permno", "fyearq"
    ],
    "srca.qcnt_8k": [
        "gvkey", "qcnt_8k"
    ],
    "srca.qcnt_press": [
        "gvkey", "qcnt_press"
    ],
    "srca.lgseg": [
        "lgseg_1", "lgseg_2", "lgseg_3"
    ],
    "srca.investor": [
        "investor_beg", "investor_avg", "investor_end", "fyear"
    ],
    "srca.afevar": [
        "sales_q1", "sales_q2", "sales_q3", "sales_q4"
    ],
    "srca.inst_vars": [
        "dt_13f"
    ],

    // 新增的数据库映射（仅补充新出现的变量）
    "Audit Analytics (audit.auditlegal)": [
        "legal_case_key", "CASE_START_DATE_S", "CASE_END_DATE_S", 
        "PLAINTIFF", "DEFENDANT", "SETTLEMENT_AMT", "is_category_type_X"
    ],
    "crsp.dsedelist": [
        "dlret"  // 新增变量 dlret 的数据库来源
    ],
    "ff.factors_daily": [
        "mktrf",  // 新增变量 mktrf 的数据库来源
        "smb",    // 新增变量 smb 的数据库来源
        "hml",    // 新增变量 hml 的数据库来源
        "umd",    // 新增变量 umd 的数据库来源
        "rf"      // 新增变量 rf 的数据库来源
    ],
    "crsp.mse": [
        "ncusip"
    ],
    "crsp.ccmxpf_linktable": [ // 新增
        "permco"
    ],
    "comp.fundq": [ // 新增
        "mqtr", "fqtr", "PRCCQ", "ATQ", "IBQ", "SPIQ", "DVPQ", "RECTQ", 
        "INVTQ", "ACOQ", "APQ", "LCOQ", "DPQ", "PPENTQ", "INTANQ", 
        "ALTOQ", "LOQ", "CEQQ"
    ],
    "taqms": [ 
        "sym_suffix",
        "Qu_Cond",
        "Qu_Cancel",
        "Best_Asksiz",
        "Best_Bidsiz",
        "Ask",
        "Bid",
        "Asksiz",
        "Bidsiz",
        "Qu_Source",
        "NatBBO_Ind",
        "Qu_SeqNum",
         "Tr_Corr",
        "Tr_SeqNum"
    ],
    "taq": [
        
        "mtaq_sym_suffix",
        "mtaq_mode",
        "mtaq_OFR",
        "mtaq_BID",
        "mtaq_OFRSIZ",
        "mtaq_BIDSIZ",
        "mtaq_ex",
        "mtaq_mmid",
         "mtaq_corr",
        "mtaq_price",
         "mtaq_size"
    ],
    "srca.wrds_taqms_iid": [
        "d_espdp_aw",
        "d_espdp_dw",
        "d_espdp_sw",
        "EffectiveSpread_Percent_Ave",
        "EffectiveSpread_Percent_DW",
         "EffectiveSpread_Percent_SW"
    ],
    "comp.company": [
        "state"
    ],
    "ibes.detu_epsus": [
        "ticker",
        "value",
        "fpedats",
        "anndats",
        "revdats",
        "measure",
        "fpi",
        "estimator",
        "analys",
        "pdf",
        "usfirm"
    ],
    "ibes.actu_epsus": [
        "ticker",
        "pends",
        "anndats",
        "value",
        "usfirm",
        "pdicity"
    ],
    "mine.iclink":[
      "ticker","permno"
    ],
    "ibes.statsum_epsus":[
      "ticker",
      "fpedats",
       "ANNDATS_ACT",
       "statpers",
       "NUMEST",
        "MEANEST",
       "medest",
        "ACTUAL",
        "stdev"
    ],
    "comp.security":[
        "ibtic"
    ],
    "compd.wrds_seg_customer":[
       "SRCDATE" ,"seg_id","STYPE"
    ],
    "inst_vars": [
        "io_lg01_v1",
        "io_lg05_v1",
        "io_lg10_v1",
        "io_totl_v1",
        "io_lg01_v2",
        "io_lg05_v2",
        "io_lg10_v2",
        "io_totl_v2",
        "io_numf"
    ],
    "ibes.detu_epsus": [
        "analyst_id","forecast_end_date","announcement_date"
    ]

};




// 历史记录栈
const historyStack = [];

// 保存当前状态到历史记录栈
function saveCurrentState() {
    const currentState = {
        searchInput: document.getElementById('searchInput').value,
        resultHTML: document.getElementById('result').innerHTML
    };
    historyStack.push(currentState);
}

// 撤回操作
function undo() {
    if (historyStack.length > 0) {
        const previousState = historyStack.pop();
        document.getElementById('searchInput').value = previousState.searchInput;
        document.getElementById('result').innerHTML = previousState.resultHTML;
    } else {
        alert("没有更多可撤回的操作！");
    }
}

// 模糊搜索函数保持不变
function fuzzySearch(query, data, key) {
    query = query.toLowerCase();
    const results = [];
    for (const fileName in data) {
        if (Object.hasOwnProperty.call(data, fileName)) {
            const fileData = data[fileName];
            for (const varName in fileData) {
                if (Object.hasOwnProperty.call(fileData, varName)) {
                    const itemData = fileData[varName];
                    if (
                        varName.toLowerCase().includes(query) ||
                        (itemData[key] && itemData[key].toLowerCase().includes(query))
                    ) {
                        results.push({ varName, itemData });
                    }
                }
            }
        }
    }
    return results;
}

// 搜索变量函数
function searchVariable() {
    saveCurrentState(); // 保存当前状态
    const input = document.getElementById('searchInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.innerHTML = `<p>请输入查询内容。</p>`;
        return;
    }

    // 模糊搜索变量名
    const variableResults = fuzzySearch(input, data, "含义");
    if (variableResults.length > 0) {
        const results = variableResults.map(result => {
            return `
                <div class="result-item">
                    <p><strong>变量名:</strong> <a href="#" onclick="searchExactVariable('${result.varName}')">${result.varName}</a></p>
                    <p><strong>含义:</strong> ${result.itemData["含义"]}</p>
                    ${result.itemData["公式"] ? `<p><strong>公式:</strong> ${result.itemData["公式"]}</p>` : ""}
                </div>
            `;
        }).join("");
        resultDiv.innerHTML = results;
    } else {
        resultDiv.innerHTML = `<p>未找到相关变量。</p>`;
    }
}

// 搜索数据库函数
function searchDatabase() {
    saveCurrentState(); // 保存当前状态
    const input = document.getElementById('searchInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.innerHTML = `<p>请输入查询内容。</p>`;
        return;
    }

    const databaseResults = Object.keys(databaseToVariables).filter(db =>
        db.toLowerCase().includes(input.toLowerCase())
    );
    if (databaseResults.length > 0) {
        const results = databaseResults.map(db => {
            const variables = databaseToVariables[db] || [];
            return `
                <div class="result-item">
                    <p><strong>数据库:</strong> <a href="#" onclick="searchExactDatabase('${db}')">${db}</a></p>
                    <p><strong>关联变量:</strong> ${variables.join(", ")}</p>
                </div>
            `;
        }).join("");
        resultDiv.innerHTML = results;
    } else {
        resultDiv.innerHTML = `<p>未找到相关数据库。</p>`;
    }
}

// 精确搜索变量函数
function searchExactVariable(varName) {
    saveCurrentState(); // 保存当前状态
    const resultDiv = document.getElementById('result');
    let item;
    let selectedFile;
    for (const file in data) {
        if (Object.hasOwnProperty.call(data, file)) {
            if (data[file][varName]) {
                item = data[file][varName];
                selectedFile = file;
                break;
            }
        }
    }
    if (item) {
        const databases = item["数据库来源"] ? item["数据库来源"].map(db => `<a href="#" onclick="searchExactDatabase('${db}')">${db}</a>`).join(", ") : "";
        const usedVariables = item["用到的变量"] ? `
            <p><strong>用到的变量:</strong> 
                ${item["用到的变量"].map(v => `<a href="#" onclick="searchExactVariable('${v}')">${v}</a>`).join(", ")}
            </p>
        ` : "";
        const exampleFile = item["示例文件"];
        const literatureFiles = exampleToLiteratureMap[exampleFile] || [];
        let literatureLinks = "";
        if (literatureFiles && literatureFiles.length > 0) {
            literatureLinks = `
                <p><strong>相关文献:</strong></p>
                <ul>
                    ${literatureFiles.map(file => `<li><a href="${file}" download>${file}</a></li>`).join("")}
                </ul>
            `;
        }
        resultDiv.innerHTML = `
            <div class="result-item">
                <p><strong>变量名:</strong> <a href="#" onclick="loadExampleFile('${selectedFile}')#${varName}">${varName}</a></p>
                <p><strong>含义:</strong> ${item["含义"]}</p>
                ${item["公式"] ? `<p><strong>公式:</strong> ${item["公式"]}</p>` : ""}
                ${usedVariables}
                ${databases ? `<p><strong>数据库来源:</strong> ${databases}</p>` : ""}
                <p><strong>示例文件:</strong> <a href="#" onclick="loadExampleFile('${selectedFile}')">${selectedFile}</a></p>
                ${literatureLinks}
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<p>未找到该变量名。</p>`;
    }
}

// 精确搜索数据库函数
function searchExactDatabase(db) {
    saveCurrentState(); // 保存当前状态
    const resultDiv = document.getElementById('result');
    const variables = databaseToVariables[db] || [];
    if (variables.length > 0) {
        const variableLinks = variables.map(varName => `<a href="#" onclick="searchExactVariable('${varName}')">${varName}</a>`).join(", ");
        resultDiv.innerHTML = `
            <div class="result-item">
                <p><strong>数据库:</strong> ${db}</p>
                <p><strong>关联变量:</strong> ${variableLinks}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<p>未找到该数据库。</p>`;
    }
}

// 修改后的加载示例文件函数
function loadExampleFile(filePath) {
    saveCurrentState();
    if (!filePath.endsWith('.txt')) {
        filePath += '.txt';
    }
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('文件加载失败');
            }
            return response.text();
        })
        .then(data => {
            console.log("文件内容:", data); // 调试信息

           const escapedContent = data
                .replace(/</g, '<')
                .replace(/>/g, '>');

            const linkedContent = addVariableLinksWithAnchors(escapedContent);

            console.log("处理后的内容:", linkedContent); // 调试信息
                const literatureLinks = exampleToLiteratureMap[filePath.replace('.txt', '')] || [];
                const relatedFiles = exampleToCodeMap[filePath.replace('.txt', '')];
                 const navBar = `
                <div class="nav-bar">
                    <div class="nav-section">
                        <strong>参考文献</strong>
                        <div class="nav-links">
                            ${literatureLinks.length > 0 ? literatureLinks.map(file => `
                                <div><a href="${file}" download>${file}</a></div>
                            `).join("") : "无"}
                        </div>
                    </div>
                    <div class="nav-section">
                        <strong>相关代码</strong>
                        <div class="nav-links">
                            ${relatedFiles ? (
                                relatedFiles.map(file => `
                                    <div><a href="#" onclick="loadExampleFile('${file}')">${file}</a></div>
                                `).join("")
                            ) : "无"}
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('result').innerHTML = `
                <div class="result-item">
                    ${navBar}
                    <p><strong>文件内容:</strong></p>
                    <div id="fileContent">${linkedContent}</div>
                </div>
            `;
        })
        .catch(error => {
            console.error('加载文件失败:', error);
            document.getElementById('result').innerHTML = `<p>文件加载失败，请检查文件路径。</p>`;
        });
}

// 为文件内容中的变量名添加超链接
// 为文件内容中的变量名添加超链接
function addVariableLinksWithAnchors(content) {
   const variableRegex = /@@VARIABLE: (\w+)@@([\w\s]+)/g; // 匹配变量引用
    const beginVariableRegex = /@@BEGIN VARIABLE: (\w+)@@/g; // 匹配变量开始标记
    const endVariableRegex = /@@END VARIABLE: (\w+)@@/g; // 匹配变量结束标记
    const variableAnchors = new Map();
    let processedContent = content;

    let match;
    // 创建锚点
    while ((match = beginVariableRegex.exec(content)) !== null) {
        const varName = match[1];
         variableAnchors.set(varName, `<a name="${varName}"></a>`);
    }
  
    processedContent = processedContent.replace(beginVariableRegex, (match, varName) => {
        return variableAnchors.get(varName) || '';
    });
    processedContent = processedContent.replace(endVariableRegex, '');

    processedContent = processedContent.replace(variableRegex, (match, varName, displayName) => {
           if (variableAnchors.has(varName)) {
             return `<a href="#${varName}">${displayName}</a>`;
        }
        return match;
    });
    return processedContent;
}
// 示例文件与相关文献的映射（支持多个文献）



const exampleToLiteratureMap = {
   
    "Wrds studio code_delta and vega": [
        "literature_delta_vegaColes et al.(2006)Managerial incentives and risk-taking.pdf",
        "mind map for PPS code.docx"
    ],
    "wrds studio code_period and start lawsuit dummy": [
        "Arena and Julio(2021JFQA)Litigation Risk Management Through Corporate Payout Policy.pdf",
        
    ],
    "studio code_bharmkt_evt20211018": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_market adjusted_BHAR": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_Event BHAR_Barber and Lyon1997": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_model adjusted AR_event study": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_montly ar_DGTW1997": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_size btm portfolio adjusted BHAR_Barber and Lyon(JFE1997)": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"
    ],
    "studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)": [
        "Long-Horizon_Event_Study_BHAR_Approach.pdf",
        "Event Study_The Stata Journal.pdf",
        "Daniel et al.(1997)Measuring mutual fund performance with characteristic-based benchmarks.pdf",
        "Daniel and Titman(1997).pdf",
        "Barber and Lyon(1997)Detecting long-run abnormal.pdf"

    ],
    
    "step1_data extration": [
        "Stephen et al.(2019)A matter of principle_accounting reports convey both cash-flow news and discount-rate news.pdf",
        "Penman and Zhu(2014)Accounting Anomalies, risk and return.pdf",
        "Supporting files for expected return and expected return news.docx"
        

    ],
    "step2_download": [
        "Stephen et al.(2019)A matter of principle_accounting reports convey both cash-flow news and discount-rate news.pdf",
        "Penman and Zhu(2014)Accounting Anomalies, risk and return.pdf",
        "Supporting files for expected return and expected return news.docx"
        

    ],
    "step3_variables calculation": [
        "Stephen et al.(2019)A matter of principle_accounting reports convey both cash-flow news and discount-rate news.pdf",
        "Penman and Zhu(2014)Accounting Anomalies, risk and return.pdf",
        "Supporting files for expected return and expected return news.docx"
        

    ],
    "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16":[
        "How to run the Holden and Jacobsen Code on the WRDS Cloud.pdf  "
    ],
    "Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16":[
        "How to run the Holden and Jacobsen Code on the WRDS Cloud.pdf  "
    ],
    "studio code_taqspreads":[
        "analysis of spread study20210901.docx  "
    ],
    "sas studio code_specify TAQ time":[
        "WRDS_DTAQ_IID_Manual_2.0.pdf  ",
        "WRDS_Intraday_Indicators_Formula_Note_JNaDWGx.pdf",
        "files for microstructure variable20211017.docx",
        "WRDS_Intraday_Indicators_Variable_Library_cuoSWGD.xlsx"
    ],
    "sas studio code_specify time variable":[
        "WRDS_DTAQ_IID_Manual_2.0.pdf  ",
        "WRDS_Intraday_Indicators_Formula_Note_JNaDWGx.pdf",
        "files for microstructure variable20211017.docx",
        "WRDS_Intraday_Indicators_Variable_Library_cuoSWGD.xlsx"
    ],
    "studio code_abnormal spread":[
        "WRDS_DTAQ_IID_Manual_2.0.pdf  ",
        "WRDS_Intraday_Indicators_Formula_Note_JNaDWGx.pdf",
        "files for microstructure variable20211017.docx",
        "WRDS_Intraday_Indicators_Variable_Library_cuoSWGD.xlsx"
    ],
    "studio code_taqvars":[
        "WRDS_DTAQ_IID_Manual_2.0.pdf  ",
        "WRDS_Intraday_Indicators_Formula_Note_JNaDWGx.pdf",
        "files for microstructure variable20211017.docx",
        "WRDS_Intraday_Indicators_Variable_Library_cuoSWGD.xlsx"
    ],
    
    "wrds studio_UD Law Dummy": [
        "Notes to UD law dummy code.docx",
        "D_UDL.csv"

    ],
    "studio code_afevar":[
        "IBES_Detail_History_User_Guide_-_December_2016.pdf"

    ],
    "studio code_lgseg":[
        "details about variables.xlsx"
    ],
   "studio code_yearly funda variable":[
        "details about variables.xlsx"
    ],
    "stuido code_investor":[
        "details about variables.xlsx"
    ],
    "code_transform quarterly to yearly":[
        "details about variables_2.xlsx"
    ],
    "studio code_gvkey fyear cik":[
        "details about variables_2.xlsx"
    ],
    "studio code_yafcnt":[
        "details about variables_2.xlsx"
    ],
    "studio code_ycomp_crsp":[
        "details about variables_2.xlsx"
    ],
    
    

        

    

    






    
};


// 单向映射：示例文件和相关代码（支持多个相关代码）
const exampleToCodeMapOneWay = {
    "studio code_bharmkt_evt20211018": ["studio code_market adjusted_BHAR", "studio code_Event BHAR_Barber and Lyon1997","studio code_model adjusted AR_event study","studio code_montly ar_DGTW1997","studio code_size btm portfolio adjusted BHAR_Barber and Lyon(JFE1997)","studio code_size portfolio adjusted portfolio_Barber and Lyon(JFE1997)"],
    "step1_data extration":["step2_download","step3_variables calculation"],
    "Holden-and-Jacobsen-Daily-TAQ-Code-2018-03-16":["Holden-and-Jacobsen-Monthly-TAQ-Code-2018-03-16","studio code_taqspreads","sas studio code_specify TAQ time","sas studio code_specify time variable","studio code_abnormal spread","studio code_taqvars"],
    "studio code_lgseg":["studio code_yearly funda variable","stuido code_investor","studio code_qfunvar"],
    "code_transform quarterly to yearly":["studio code_gvkey fyear cik","studio code_yafcnt","studio code_ycomp_crsp","studio code_qtr_comp_crsp"],
    "studio code_qmktvar"   :[ "studio code_ymktvar"],
    // 你可以根据需要继续添加其他映射
};
// 自动生成双向映射
const exampleToCodeMap = {};
for (const [key, values] of Object.entries(exampleToCodeMapOneWay)) {
    // A -> [B1, B2, ...]
    exampleToCodeMap[key] = values;

    // B1 -> [A, B2, ...], B2 -> [A, B1, ...], ...
    for (const value of values) {
        if (!exampleToCodeMap[value]) {
            exampleToCodeMap[value] = [key]; // 初始化
        } else {
            exampleToCodeMap[value].push(key); // 添加 A
        }

        // 添加其他相关代码
        for (const otherValue of values) {
            if (otherValue !== value && !exampleToCodeMap[value].includes(otherValue)) {
                exampleToCodeMap[value].push(otherValue);
            }
        }
    }
}
