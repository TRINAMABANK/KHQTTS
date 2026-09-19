(function(){
"use strict";

var DL = {
  d1: { n: "Bieu_mau_khoi_tao_he_thong_Phong_HCQT.xlsx", b64: "UEsDBBQAAAAIAGZeM11Gx01IlQAAAM0AAAAQAAAAZG9jUHJvcHMvYXBwLnhtbE3PTQvCMAwG4L9SdreZih6kDkQ9ip68zy51hbYpbYT67+0EP255ecgboi6JIia2mEXxLuRtMzLHDUDWI/o+y8qhiqHke64x3YGMsRoPpB8eA8OibdeAhTEMOMzit7Dp1C5GZ3XPlkJ3sjpRJsPiWDQ6sScfq9wcChDneiU+ixNLOZcrBf+LU8sVU57mym/8ZAW/B7oXUEsDBBQAAAAIAGZeM11qfwLM6wAAAMsBAAARAAAAZG9jUHJvcHMvY29yZS54bWylkcFOwzAMhl9l6r110sKkRV0umziBhMQkELco8bZoTRolRu3enrZsHQhuHOP/82dbqXUQuo34HNuAkSymRe8an4QO6+xIFARA0kd0KhUD4Ydw30anaHjGAwSlT+qAUDK2BIekjCIFozAPszG7KI2eleEjNpPAaMAGHXpKwAsON5YwuvRnw5TMZJ/sTHVdV3TVxA0bcXh7enyZls+tT6S8xkzWRgsdUVEb5XhROPdNDd+K9WX2VwHNYpgg6BxwnV2T12qz3T1ksmTlMmernK927E7cc8Gr99H1o/8mdK2xe/sP41Uga/j1b/ITUEsDBBQAAAAIAGZeM12ZXJwjEAYAAJwnAAATAAAAeGwvdGhlbWUvdGhlbWUxLnhtbO1aW3PaOBR+76/QeGf2bQvGNoG2tBNzaXbbtJmE7U4fhRFYjWx5ZJGEf79HNhDLlg3tkk26mzwELOn7zkVH5+g4efPuLmLohoiU8nhg2S/b1ru3L97gVzIkEUEwGaev8MAKpUxetVppAMM4fckTEsPcgosIS3gUy9Zc4FsaLyPW6rTb3VaEaWyhGEdkYH1eLGhA0FRRWm9fILTlHzP4FctUjWWjARNXQSa5iLTy+WzF/NrePmXP6TodMoFuMBtYIH/Ob6fkTlqI4VTCxMBqZz9Wa8fR0kiAgsl9lAW6Sfaj0xUIMg07Op1YznZ89sTtn4zK2nQ0bRrg4/F4OLbL0otwHATgUbuewp30bL+kQQm0o2nQZNj22q6RpqqNU0/T933f65tonAqNW0/Ta3fd046Jxq3QeA2+8U+Hw66JxqvQdOtpJif9rmuk6RZoQkbj63oSFbXlQNMgAFhwdtbM0gOWXin6dZQa2R273UFc8FjuOYkR/sbFBNZp0hmWNEZynZAFDgA3xNFMUHyvQbaK4MKS0lyQ1s8ptVAaCJrIgfVHgiHF3K/99Ze7yaQzep19Os5rlH9pqwGn7bubz5P8c+jkn6eT101CznC8LAnx+yNbYYcnbjsTcjocZ0J8z/b2kaUlMs/v+QrrTjxnH1aWsF3Pz+SejHIju932WH32T0duI9epwLMi15RGJEWfyC265BE4tUkNMhM/CJ2GmGpQHAKkCTGWoYb4tMasEeATfbe+CMjfjYj3q2+aPVehWEnahPgQRhrinHPmc9Fs+welRtH2Vbzco5dYFQGXGN80qjUsxdZ4lcDxrZw8HRMSzZQLBkGGlyQmEqk5fk1IE/4rpdr+nNNA8JQvJPpKkY9psyOndCbN6DMawUavG3WHaNI8ev4F+Zw1ChyRGx0CZxuzRiGEabvwHq8kjpqtwhErQj5iGTYacrUWgbZxqYRgWhLG0XhO0rQR/FmsNZM+YMjszZF1ztaRDhGSXjdCPmLOi5ARvx6GOEqa7aJxWAT9nl7DScHogstm/bh+htUzbCyO90fUF0rkDyanP+kyNAejmlkJvYRWap+qhzQ+qB4yCgXxuR4+5Xp4CjeWxrxQroJ7Af/R2jfCq/iCwDl/Ln3Ppe+59D2h0rc3I31nwdOLW95GblvE+64x2tc0LihjV3LNyMdUr5Mp2DmfwOz9aD6e8e362SSEr5pZLSMWkEuBs0EkuPyLyvAqxAnoZFslCctU02U3ihKeQhtu6VP1SpXX5a+5KLg8W+Tpr6F0PizP+Txf57TNCzNDt3JL6raUvrUmOEr0scxwTh7LDDtnPJIdtnegHTX79l125COlMFOXQ7gaQr4Dbbqd3Do4npiRuQrTUpBvw/npxXga4jnZBLl9mFdt59jR0fvnwVGwo+88lh3HiPKiIe6hhpjPw0OHeXtfmGeVxlA0FG1srCQsRrdguNfxLBTgZGAtoAeDr1EC8lJVYDFbxgMrkKJ8TIxF6HDnl1xf49GS49umZbVuryl3GW0iUjnCaZgTZ6vK3mWxwVUdz1Vb8rC+aj20FU7P/lmtyJ8MEU4WCxJIY5QXpkqi8xlTvucrScRVOL9FM7YSlxi84+bHcU5TuBJ2tg8CMrm7Oal6ZTFnpvLfLQwJLFuIWRLiTV3t1eebnK56Inb6l3fBYPL9cMlHD+U751/0XUOufvbd4/pukztITJx5xREBdEUCI5UcBhYXMuRQ7pKQBhMBzZTJRPACgmSmHICY+gu98gy5KRXOrT45f0Usg4ZOXtIlEhSKsAwFIRdy4+/vk2p3jNf6LIFthFQyZNUXykOJwT0zckPYVCXzrtomC4Xb4lTNuxq+JmBLw3punS0n/9te1D20Fz1G86OZ4B6zh3OberjCRaz/WNYe+TLfOXDbOt4DXuYTLEOkfsF9ioqAEativrqvT/klnDu0e/GBIJv81tuk9t3gDHzUq1qlZCsRP0sHfB+SBmOMW/Q0X48UYq2msa3G2jEMeYBY8wyhZjjfh0WaGjPVi6w5jQpvQdVA5T/b1A1o9g00HJEFXjGZtjaj5E4KPNz+7w2wwsSO4e2LvwFQSwMEFAAAAAgAZl4zXduNDvXHAwAAIgoAABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWyVVs9v2zYU/lcedOoA11Ls+EcKx1isrHGQ2nUbr9uVtmlTsERqEl0nx2Foi6EYkAw7D/WCYFiBHobuZB12kLH/Q//JnihHdTpZSw4S+Si+773veyTFxlx4U59RKuHMsbm/rzEp3Ue67g8ZdYhfFC7l+GUsPIdINL2J7rseJSPl5Nh6yTCqukMsrjUbaqznNRtiJm2L054H/sxxiHfeoraY72s72s3Ac2vCpBrQmw2XTOgplV+76ICmnuKMLIdy3xIcPDre1w52Hpl7ykPNeGHRub/Rh5jMQIhpbByP9jUjzonadChjCILNS2pS246RMJPv1qDap6Cx52b/Bv6x4o/pDYhPTWF/Y40k29fqGozomMxs+VzM23TNqaIAh8L21RvmyeRKTYPhzJfCWXtjYMfiSUvObsTY9Khu8SitPUqfe5QrWzzKa49yQjZJTlE7JJI0G56YgxdPR7i4owRS7sjI4nE1T6WHXy30k81+O/ylewT94y4cPj3otqF71D6Ogtc9OGlHwa/H0I+W754C9l9DH98XOPkh9Nrhz9hpm8/6DV1iGjGYPsQHw6c5lLTPBsppUmWVVGlLUp0ouB6CZOFffALS4rdjKIRWPoLJLHSMln9LmIbvYcqIlQFi5oMcIciQhcscirspo10FVd4mc/iew0gQzoBPmBUFb9wsUvkg3Un4GwcWvkNV+h2zB13iQPg9PFi3LcKnX2TRvENu0ovfE5Ts+hxcFv7hwuri5OQwh3sl5V7Jxe+EV+BHwSUWdIYVyeKdD2CUDaNeq1crtSxy9wqeW4Nb7Kopu2pugNVFFLwluE6i4Ec4wxjXEpgIF7C6/GeRuXLz8UrGzsOSUQYzXAwZdKLlIq42C1UTLpwC9Iq7BXhWLBeg3yu2zU6WKPfIOak8Cz+SJGV4cZC3qWupLrXcGF/hr8QGzqLlB74hyH/RE1HywaZUYt2+5MQhA1zkxaFwii+zxDXvkdTYsil823mi9w4fby3ZLe71lHv9//Rd/j4DB9edBaMo+BOwfPAAj8+fQKLaBThdXfQLoNLJ2rGtfPzuZHYeBa9QzNUPHA7wQDb2jJ1SebdSraFBihwn0DvpdQ8iLlMNvq/c+Fz8wFmOVnupVnt3D3ESb1EpYrV0iFcpjvloyiyN8nH7HuJy3Dm41KGlJForVEdjUJTe3RZUfpRuspQG0fIK92f8q1ldfspaGW/xvJlGwccsrfSNH3d8d+oQb2JxH2w6xnBGsYaHm5dcRhJDClf9ywdC4tVAdRne4agXT8DvYyFkasT3g/Ra2PwXUEsDBBQAAAAIAGZeM12W37j1qQQAADcTAAAYAAAAeGwvd29ya3NoZWV0cy9zaGVldDIueG1snZhNj9pGGMe/yohDtZFazDtsyqLuQgLsZq3NQrbqcTCz2Fp7htgDZG9pD+2hipRIrapKrZrtKqoSNepLesKHHtzme7ifpOPBSymMH6wcABv8+z/P2D97bOoz5l54JiEcPXJs6u1lTM7HtzXNM0ziYC/LxoSKX86Z62AuVt2R5o1dgocScmytkMtVNAdbNNOoy+9O3EadTbhtUXLiIm/iONi9PCA2m+1l8pmbL06tkcnlF1qjPsYj0iP8wVgAYlVb5gwth1DPYhS55Hwvs5+/fViThNzizCIzb2UZRYMZMHYRrXSHe5lc1BOxicGjCCw+pqRJbDtKEp08jEMz/xWNyNXlm/i7cvyivQH2SJPZH1tDbu5lRDNDco4nNj9lsw6Jx1SWgQazPfmOZouNS5UMMiYeZ05Mi8KORRef+NHNzlgh8rUEohAThXWikEQUY6K4QZQSiFJMlFJ3VY6J8gZRTSAqMVFJXaMaE9WNcewmELWYqKUmdmNid4MoJh3B3M0hzC1kWhx8qU4Lc9you2yG3AgQgdGCFFAGCGMsGp0tPe6KXy3B8UZrX++gXvBps4P09ttfQv+7LmoF3+pt9B52xh+ik07wmY7uP/gk9B/rqBP6n6O+eH+qt+saF/WjFM0QL1F3WbyQWfuiuOymKLspJHTT6/f/HyuhAxgS7TxB0+A54sErqsCbMH5HXFNsZAR/0BHilwq+BfNNM/RfGmiIqamA72yBw/mLMRqE89cG2jnF9OKWIuMunHFiBr+L3gdYNfg2zB4H16jJPI6ahHLiKgI6cIA+evtr6H9voeHkMvS/4MiQI8qjHblfVcPpvlNiAUg83CbI/IoiRx4mbgZXYmftnOmtW4DBpaWwJRldlNHR1DNt5OvadNXO1S02i/fdcP4TRfcnof/MQAfh/JqpHIVDBphl+cOPKHawOMwXWYM52anqcLe2NBP6X4vRt63gykF/PY1aUjkLh0SaorzKU5g7wBTdC66pGVWeX6l2QxtOaDY/OGi3VJLC3D+Pv1J5+C7QIQzlc7n3c4sXYFd5aVd5w67Cml1lsN694BXqiwvQl+gYWyqvYFycUFmbp/EKzlkVCh2Jfp5Z6KjT0lVywUlSroJKLpiDi7ZhWHiVAHZgMPV52YVzElyDoXIa1SpL1SobqhXXVKuA5U5McdI6qMOC5+ISomNHpRscIfZTdmym0Q3O6bvRFPGDaCOe+3Qz+JGiXuj/pjIODks2DuZi48DSbThCeKf3VNbBWHrr4JwE62ComMa66tK66oZ1pTXrqmC5s79fiutK8LOYNcRM6j+hI5V2cAZ3GR1lp8M04sFJQrc3N84dhfM/UZ+J2wmVc3COdK6ocm5r/a2l23BEdK1T3WR3YCz1qduFcxKcg6FCGudqS+dqG86V15yrgeWieewbecf2Rmi3r7yvb8IR4mEgO0x1wwbnNM3JpXiqQWdW9N4PXlPUCv0XyrPgDhwlnSupnIO5LTPrlv6TZ1YYTH1n0oVzEnyDoXwZ8k1bedqO/lA6xu7Ioh6yyblIy2WrYtp2F//QLFY4G8sH8AHj4oleLpoED4kbbSB+P2eML1eih/rlf2WNfwFQSwMEFAAAAAgAZl4zXVKPDqbtAwAAVAwAABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0My54bWyNl89v40QUx/+VJx8QSLBO86OtliTS1ikJ6taUJpSz60xiq/aMa082u8fCgQOXXXFCCKmhrAQrVQLEKRHaw1T7f/g/4c3YMdnijHtI4l/f77z5vOc3k/acxReJRwiH52FAk47hcR49Ns3E9UjoJI9YRCjembA4dDiexlMziWLijJUoDMx6rbZrho5PjW5bXTuJu20244FPyUkMySwMnfjFAQnYvGPsGOsLp/7U4+qC2W1HzpQMCf8qQgGemoXP2A8JTXxGISaTjvFk5/HhvlKoJ858Mk82jkFO5pyxC3ny+bhj1GRMJCAulxYO/jwjFgkC6YSRXOamxn+DSuXm8dr+MzV/DO/cSYjFgq/9Mfc6BgYzJhNnFvBTNh+QfE4tZeiyIFHfMM8ebtUMcGcJZ2GuxoFDn2a/zvM1jA1Fo75FUc8V9fuKemuLopErGv8bo7lF0cwVzfuK5jZFK1dk8zczAApfz+FOtx2zOcTycbSTByoJSo7UfCorZshjvOujjnd7T+wBHKerXy2wvhiOwDq0R4en8IETRp/CIF1e2/LubxbYffGNDUNxZQ1gNBBXdr9tcgxA2pgufnDgYvS6ce9CowinocKpbwnnWNyAxRIOFqGcxO8PoQwO9AYj8YbCebr6ESIvXd5SMMHyfKCeWFCvxM7S2x156eqVjyZ3L98tKDxLV9/D5Sxd3lAIxD8lfj29HxJFmzBd/e6Ci3FxX7yZoT2X8U3hwzO791GJ66HetY9OrieWgFNeuB5whm6a9DSLbDSVb2OLr2V9ctDvlSVBrztwKPR9sQgRG/Jzy7hXOzwVN9STDssFKyOtd8CW+XEt+5QB1YsHGxxVniJP3IIM6u6ln66uZjAQ1/fr6T3ErQJxqwrx0aBnlzHWC/PKPMLCwUhlOFPoMQeJ2VMPY/wuKqP+ME8fXZRXGXa9RUOPvQLGmrQr/sbpcJwaviHp8m0EF9k8s77EPfke8vjdH+nqZzrVpGG3SMNudRqs0jTohWVpsMQCbE/8Qssy8DA7bQb0FvWWNgMVHNYZwK8FR8RYSd/KhrWU7SmQwH/yNbz3Ct57VbztYRltvSzH82XWgUexLAN7OktXP9CMODxNV3+W9psHGZ+pJaPk3c7A6z129KVfAWQN/u6VuGbAZdNbV/vshUrCOF291hb7fgF/v7LYR2Xw9bITT/yFRXCE7yOMVGfM4huJax8XWXFbvsDqTXPweo+e3qMCfAWMNXiat025yL+GC1n4Yb4CZPO8xDws3/Ltq6u5sQ2Tu+1jJ576NIGATHDo2qM97H5xtn3NTjiL1M7snHHc6KlDD3f9JJYP4P0JY7w4kbu94o9E919QSwMEFAAAAAgAZl4zXTkHJxISAwAALAoAABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0NC54bWyNlk1v2jAYx7/Ko5w6CTUQoHQVIJXASqWVIUq7cwCTRCRx5pjS3qodJ01a93LYLtOmTZqqTpu2Wzmm6vfIPslsk2awhiQHEr/9/s/jv03s6gyTiWcgROHUthyvJhmUujuy7A0NZGveJnaRw3rGmNgaZVWiy55LkDYSkG3JSj6/Jdua6Uj1qmjrknoVT6llOqhLwJvatkbOGsjCs5pUkO4aeqZuUNEg16uupqNDRI9cBrCqHOmMTBs5nokdIGhck3YLO62KIMSIYxPNvKUy8MkMMJ7wyv6oJuV5TshCQ8olNPY6QSqyLK7EMnkWikr/gnJyuXwn/0jMn6U30DykYuupOaJGTdqWYITG2tSiPTxro3BOZSE4xJYnnjBbDC4/lGA49Si2Q5oFtk1n8dZO78xYIpTKGkIJCSUzUQyJYmaiFBKlzEQ5JBbzlxcGCPuaGtXqVYJnQPhwJscLYhEEzlwzHb5jDilhvSbjaP3mVTB/0WnDQTD/poLa3odu23/JH687e/D49scR9Hv+B+i3W09ADa6/dKERXF+pcOyfg4B32Ws/mD8/qMqUJcRl5SH7sUSibBTpv4ZilF5RpKesSY9F/OrCILj+PoSNnuZMHqxGERqNZI2O4f+2YRc2OrrhXzlwcxHM3zi6fHPhX9pxemoWvUZ2vWYWPTW7XiuLXjOT3sqilKJFKYkAxTUB+DpAAf6cv4V+MH/n6KCb/idbBLoY5qDLEgAqeuJWK1lcyZXz+bhFScPysVgzGSvktmOxVhp2L8kVJ8uRk+V0JxXh5N6ShTAx2MvMQZ/c/gzmH5nDruH/irczOcK6CappWCnezjRMibczDbu3eCt2bkV2bqXbWRR2ij24MG3ZxkEwf8+a2ffEifMyWb6QK8Z7mYat2ZrJ2HY51slkqJLoYyXysZLuY0n4qBrTM//SgROTPXPAvi2fw0qcf8my64xQk7H4DdxMhrbi3UuG1vyp5aXjld+iDjSim44HFhozmfxmhe1usriWLCoUu+LEHWDKDnBRNNhtDhE+gPWPMaZRhZ/i0QWx/hdQSwMEFAAAAAgAZl4zXYvSVwNJAwAA9woAABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0NS54bWytVkFv0zAY/Sufcp7I1nYbQm0llhWKxEa3laEd09StrSZ2Sdx1uzFxQICQmMQOHBAaggMIpAk4tQcOQfsf4Zfw2e1CBmnabRza2I7f+57fsyMX+8LvBJQQCXuey4OSQaXs3jDNwKHEs4Nroks4vmkJ37Mldv22GXR9Yjc1yHPN3Pz8kunZjBvloh6r+eWi6EmXcVLzIeh5nu3vrxBX9EvGgnE2sMnaVOoBs1zs2m2yReT9LgKwa8Y8TeYRHjDBwSetknFz4UZlWSP0jG1G+kGiDWoxDSE6qnOnWTLmlSbiEkcqChsfu8QirquYUMnDManxp6hCJttn9Lf0+lFeww6IJdwHrClpybhuQJO07J4rN0W/SsZrWtSEjnAD/Q/90eQCSnd6gRTeGI2FPcZHT3vvzIwEIpefgMiNEbl/ENcnIPJjRH7mGoUxojBzjcUxYrR+c2SAtm/Vlna56Is++Go60qmGDkHD0TXG1Y7Zkj6+ZYiT5Y37O/DzZTR8tl4Fqxq+wMdWeGBVYTt8CmvhwQ6s3NyBerVyD6xo8L4GK9Hgs1U0JdZWDKaDP6wZF84Zfw3kYyV5rSQ3QQnSf+hCIxp8cc7Ta/BKNrgaDY55G3bDj7AeDV8z+HkYDZ/bKURWNtF6O3zHIQiPHXqOCWQ0PFSdNM7VmcVt9JDGQbLBjxSeyuzaEkSTpJ1LoRCnUNA18hNqbNq8Awvw69ErqEfDI5TdZuGxp104dOagRsNvqiC+SUspm7xOT09OjzVnajTZ6LuMU6ACzZRpGVypdOWSpc95vBh7vDjd45z2+HbCXOhQFeQc1P3Tk2j4FsV2afg13ejsCjVkOgJJw+9I4mb6ZmUz1SkRegvo7SuR943aaiwaPvbSUvhvuioz6OKJA4FWfYJmbz8aPsnKaCnOaGl6Rnmdkd7yoySS2TTw64DD+L3iaQFl0yeNSAslG11neOwldDCFJ54+/hI4KvmQejCupKQyRcklY1iOY1ieHkNBx2DR3n74icMuw/85WKeqqO6k2Z9NO83+bPTF7L+SksoUJRe130zcFNSFcM3224wH4JIWFpi/toynzh/dsEYdKbr68tAQEu8iuknxYkp8NQHft4SQcUddSOK7bvk3UEsDBBQAAAAIAGZeM12uXVy7CgMAABYOAAANAAAAeGwvc3R5bGVzLnhtbN1XbW+bMBD+K4gfMAKkLEwhUotaadI2VWo/7KsTTLBkMDOmI/3189lAyMul6V6+DBRh391z99z5bCvLRu04fSooVU5X8qpJ3EKp+pPnNZuClqT5IGpaaU0uZEmUnsqt19SSkqwBUMm9YDaLvJKwyl0tq7Z8KFXjbERbqcSduY63Wuai2ovmrhVoW1JS54XwxE0JZ2vJrDEpGd9ZeWAkG8GFdJRmQxPXN6Lm1Rr4/RSo9r5KVglppJ4NcxzsVjLCjcG6dzKJIrdrzXrmz4OFPz8MNf9Tpw/mOcf/Taej/Wxqbz6NxjHOx/qGrhWsljVRisrqQU8syEhPdf34eVfr+m4l2fnBjXs9ohGcZRB0myIlXKMab+J1jGc+Oq21kBmVY2KBO4hWS05zBXjJtoUZKFGbSEIpUcIoY2QrKmIzH2AHcNP4iasK07gHK3V/c//x/s4yBNsh0JUQY2w5XYnQpiP5KyHWepJcP9CF21DOn8DL93ysnq99dblj9+fnzGxNaJ9hqEveD62bfgKRpu6s84nf+e/5rdmLUHetTqEy8x+tUPRR0px1Zt7lewKYe//fug/27oMj96Su+e6Ws21VUlvcqyOulmTAOYWQ7FVHg5290QKqz60XKhXbTCU/JamfaaeGM8Xrcpx0iNTE/2ukTwkOnLy+NSYNeNB+o9SBIy5xv8GNwieLsW4ZV6zqZwXLMlqddqH2r8ha31kHAbRVRnPScvU8KhN3P/5KM9aW8Wj1CKn3VvvxF9i5frQ/u3UwVmW0o1naT/VWPDjN7GMQx6rJgX+qQlFWiahAicZCaaAoi0Nj/Y95LfC8rBJluDivWuCoBY6yuLOq1LxoLAQV6wdJOY7DMIrQ8qbpeRopWsMogh/iEGUIGDQWRHtv5S80wIW2eaM30FW+2DZoyhdaFE35QuVBhdQQMHGMNAAaCzDooqAdBSSQWNBqCCoMYZ1Rhug2v6CKY1QFTYp0bxRhhYrgRdYL3URhGMeICpQIjTBEVbBhL6hQGkAEVYWhvUiP7jNvuOe8/T/B1S9QSwMEFAAAAAgAZl4zXbdH64rAAAAAFgIAAAsAAABfcmVscy8ucmVsc52SS24CMQxArxJlX0ypxAIxrNiwQ4gLuInno5nEkWPE9PaN2MAgaBFL/56eLa8PNKB2HHPbpWzGMMRc2VY1rQCyaylgnnGiWCo1S0AtoTSQ0PXYECzm8yXILcNu1rdMc/xJ9AqR67pztGV3ChT1Afiuw5ojSkNa2XGAM0v/zdzPCtSana+s7PynNfCmzPP1IJCiR0VwLPSRpEyLdpSvPp7dvqTzpWNitHjf6P/z0KgUPfm/nTClidLXRQkmb7D5BVBLAwQUAAAACABmXjNd7fGPN70BAAB6AwAADwAAAHhsL3dvcmtib29rLnhtbI2STW7bMBCFrzLQASRHtgPUiLKx0TZA0RZNkD1FjcRB+COQlF3nCt30Al1kmUWBLLppvVSRe/gmpSQ4VWHA6IqcN4OPbzhzsTH2LjfmDj4rqd3CZpHwvl4kieMCFXOxqVGHXGmsYj6EtkpMWRLHleGNQu2TdDI5TyxK5sloJ6h20UD7H5arLbLCCUSv5IBSjHR0eXFw9tFCMo6MR9691Kmdcku4cX8LuhDW5CgnSX6bRf1dYgSKNCm6xyKLJhE4YTZvjaV7oz2T19waKbPobEjcovXEj+TrzuYNy12veJZ/6nrOovNJAJZkne8rej4LJtcYioeo8eY1SY92xTy+saapSVc9JrSRjProv+JwgmYKQ1UMN6L9oSvwpIGLRledoVBwVQzmfKCOWrULCgl7VQz8MSuNYcW0ANc+cAG6en7a774RFO3Pf6DpCWh6BJ3GsDTOwzLsA9oRZnoCMz3CzGL4/XW/+xLsqf3ukYN8fmrA2/bXCDk7gZwdIefBmWi/vzS8bh9BtQ9byNl2BJ2fgM6HGR0GU2BJGov3Ae+6RFgTHna0O/pppLP52auwDo2Uy6B90O8MK14mfVjTyz9QSwMEFAAAAAgAZl4zXQJCRdzIAAAAQwQAABoAAAB4bC9fcmVscy93b3JrYm9vay54bWwucmVsc82Uyw6CMBBFf6XpBzjIy8QIKzdsDT/Q4PCI0DadMerfS2CBTVy4IbJq7jQ992ympwv2ijujqe0siefQa8pky2yPAFS1OCjaGYt6vKmNGxSP0TVgVXVTDUIYBCm4T4bMT59MUb4s/kI0dd1VeDbVfUDNX8DwMO5GLSJLUSrXIGcSnv0yJpiO/W4kS1FcM+mK614K+LdR6BmFGzCKPKNoA0axZxRvwCjxjJI1jYhfPdKiM2evP12zn8e3uNRPcR76y3SYJMD7M/I3UEsDBBQAAAAIAGZeM11mntfqKwEAAPsFAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbM1Uy07DMBD8lSjXKnEpjwNqegGu0AM/YJJNY8Uvebcl/Xs2CY0EKi1VkMjFlr2zM+MdycvXvQeMGqMtZnFF5O+FwLwCIzF1HixXSheMJD6GjfAyr+UGxGI+vxO5swSWEmo54tXyEUq51RQ9NXyNytksDqAxjh56YKuVxdJ7rXJJXBc7W3xTST4VUu7sMFgpjzMGxJE4KtGVflQ4NL7sIARVQLSWgZ6lYZhotEDaa8D0NMcRl64sVQ6Fy7eGW1L0AWSBFQAZnfakszPSxEOGfr0abaCjOanI0HVwHjm1AJfrHWJpuxPPRBBInXnkIMnco18IbeIFFL8V5wm/u1B3maDotvFj/przwH+pkcVUjFxPxcjNVIzc/qeRN+fqv/6L2j01UtnBgOj+/NUHUEsBAhQAFAAAAAgAZl4zXUbHTUiVAAAAzQAAABAAAAAAAAAAAAAAAIABAAAAAGRvY1Byb3BzL2FwcC54bWxQSwECFAAUAAAACABmXjNdan8CzOsAAADLAQAAEQAAAAAAAAAAAAAAgAHDAAAAZG9jUHJvcHMvY29yZS54bWxQSwECFAAUAAAACABmXjNdmVycIxAGAACcJwAAEwAAAAAAAAAAAAAAgAHdAQAAeGwvdGhlbWUvdGhlbWUxLnhtbFBLAQIUABQAAAAIAGZeM13bjQ71xwMAACIKAAAYAAAAAAAAAAAAAAC2gR4IAAB4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxQSwECFAAUAAAACABmXjNdlt+49akEAAA3EwAAGAAAAAAAAAAAAAAAtoEbDAAAeGwvd29ya3NoZWV0cy9zaGVldDIueG1sUEsBAhQAFAAAAAgAZl4zXVKPDqbtAwAAVAwAABgAAAAAAAAAAAAAALaB+hAAAHhsL3dvcmtzaGVldHMvc2hlZXQzLnhtbFBLAQIUABQAAAAIAGZeM105BycSEgMAACwKAAAYAAAAAAAAAAAAAAC2gR0VAAB4bC93b3Jrc2hlZXRzL3NoZWV0NC54bWxQSwECFAAUAAAACABmXjNdi9JXA0kDAAD3CgAAGAAAAAAAAAAAAAAAtoFlGAAAeGwvd29ya3NoZWV0cy9zaGVldDUueG1sUEsBAhQAFAAAAAgAZl4zXa5dXLsKAwAAFg4AAA0AAAAAAAAAAAAAAIAB5BsAAHhsL3N0eWxlcy54bWxQSwECFAAUAAAACABmXjNdt0frisAAAAAWAgAACwAAAAAAAAAAAAAAgAEZHwAAX3JlbHMvLnJlbHNQSwECFAAUAAAACABmXjNd7fGPN70BAAB6AwAADwAAAAAAAAAAAAAAgAECIAAAeGwvd29ya2Jvb2sueG1sUEsBAhQAFAAAAAgAZl4zXQJCRdzIAAAAQwQAABoAAAAAAAAAAAAAAIAB7CEAAHhsL19yZWxzL3dvcmtib29rLnhtbC5yZWxzUEsBAhQAFAAAAAgAZl4zXWae1+orAQAA+wUAABMAAAAAAAAAAAAAAIAB7CIAAFtDb250ZW50X1R5cGVzXS54bWxQSwUGAAAAAA0ADQBWAwAASCQAAAAA", path: "templates/Bieu_mau_khoi_tao_he_thong_Phong_HCQT.xlsx" },
  d2: { n: "Mau_bang_ke_Phong_HCQT.xlsx", b64: "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", path: "templates/Mau_bang_ke_Phong_HCQT.xlsx" }
};

function download(id) {
  var item = DL[id];
  if (!item) return;
  try {
    var bin = atob(item.b64);
    var n = bin.length, arr = new Uint8Array(n);
    for (var i = 0; i < n; i++) arr[i] = bin.charCodeAt(i);
    var blob = new Blob([arr], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = item.n;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() { URL.revokeObjectURL(a.href); a.remove(); }, 200);
  } catch (err) {
    var a2 = document.createElement("a");
    a2.href = item.path;
    a2.download = item.n;
    document.body.appendChild(a2);
    a2.click();
    setTimeout(function() { a2.remove(); }, 200);
  }
}

var TABS=[
  ["p1","Tổng quan"],
  ["p2","Kế hoạch triển khai"],
  ["p3","Dữ liệu & chính sách"],
  ["p4","Quy trình hoá đơn"],
  ["p5","Đối soát & thanh toán"],
  ["p6","Cơ sở lưu trú & giá"],
  ["p7","Tài liệu"],
  ["p8","Nội dung thống nhất"]
];

var ST=["Chưa bắt đầu","Đang làm","Hoàn thành","Vướng mắc"];
var SIDES=["Phòng HCQT","Nam Á Bank","Hai bên"];
var DEPTS=["—","Hành chính","Nhân sự","Kế toán","Tài chính","CNTT","Pháp chế","Ban lãnh đạo"];
var PHASES=["Chuẩn bị","Tiến hành","Demo & thống nhất","Ký kết & đào tạo","Go-live & hỗ trợ"];

var SEED=[
  ["Chuẩn bị","Họp khởi động: thống nhất phạm vi và chính sách","Hai bên","—",1,
   "2026-09-16","2026-09-16","Chưa bắt đầu","Hình thức: họp trực tiếp"],
  ["Tiến hành","Gửi biên bản kết luận sau buổi họp","Phòng HCQT","—",0,
   "2026-09-17","2026-09-17","Chưa bắt đầu","Mới bổ sung"],
  ["Tiến hành","Cung cấp dữ liệu khởi tạo: chính sách công tác và phạm vi người dùng","Nam Á Bank","Nhân sự",1,
   "2026-09-16","2026-09-18","Chưa bắt đầu","Kê khai theo biểu mẫu khởi tạo"],
  ["Tiến hành","Rà soát Hợp đồng hợp tác bản cuối","Hai bên","Pháp chế",0,
   "2026-09-16","2026-09-23","Chưa bắt đầu","Thực hiện song song với công tác khởi tạo"],
  ["Tiến hành","Phòng HCQT tiếp nhận và rà soát dữ liệu khởi tạo","Phòng HCQT","—",0,
   "2026-09-18","2026-09-18","Chưa bắt đầu",""],
  ["Tiến hành","Phòng HCQT khởi tạo và cấu hình hệ thống","Phòng HCQT","—",1,
   "2026-09-19","2026-09-21","Chưa bắt đầu","Hoàn thành trong 48 giờ kể từ khi tiếp nhận dữ liệu"],
  ["Demo & thống nhất","Trình diễn hệ thống và chạy thử tình huống nghiệp vụ","Hai bên","—",1,
   "2026-09-22","2026-09-23","Chưa bắt đầu",""],
  ["Demo & thống nhất","Thống nhất biểu mẫu bảng kê và quy trình xuất hoá đơn","Hai bên","Kế toán",0,
   "2026-09-22","2026-09-23","Chưa bắt đầu","Mới bổ sung"],
  ["Ký kết & đào tạo","Ký kết hợp đồng và thống nhất ngày vận hành chính thức","Hai bên","Pháp chế",1,
   "2026-09-24","2026-09-25","Chưa bắt đầu",""],
  ["Ký kết & đào tạo","Truyền thông và đào tạo người dùng","Hai bên","Nhân sự",1,
   "2026-09-24","2026-09-25","Chưa bắt đầu","Thực hiện song song với công tác ký kết"],
  ["Go-live & hỗ trợ","Đưa hệ thống vào vận hành chính thức","Hai bên","—",1,
   "2026-09-28","2026-09-28","Chưa bắt đầu",""],
  ["Go-live & hỗ trợ","Hỗ trợ sau triển khai","Phòng HCQT","—",0,
   "2026-09-28","","Chưa bắt đầu","Họp rà soát định kỳ vào sáng Thứ Năm hàng tuần","from"],
  ["Go-live & hỗ trợ","Cung cấp danh sách cơ sở lưu trú thường sử dụng và hợp đồng giá","Nam Á Bank","Hành chính",0,
   "2026-09-28","","Chưa bắt đầu","Mới bổ sung","after"],
  ["Go-live & hỗ trợ","Thực hiện đối soát kỳ đầu tiên","Hai bên","Kế toán",0,
   "2026-10-01","2026-10-04","Chưa bắt đầu","Mới bổ sung. Áp dụng cho kỳ 2 tháng 9"],
  ["Go-live & hỗ trợ","Phát hành thư giới thiệu Phòng HCQT tới các cơ sở lưu trú","Nam Á Bank","Hành chính",0,
   "2026-09-28","","Chưa bắt đầu","Mới bổ sung. Điều kiện để cơ sở lưu trú áp dụng giá thoả thuận","after"],
  ["Go-live & hỗ trợ","Cập nhật giá thoả thuận của cơ sở lưu trú lên hệ thống","Phòng HCQT","—",0,
   "2026-09-28","2026-09-28","Chưa bắt đầu","Mới bổ sung"]
];

var GROUPS=[
  ["Danh sách người dùng","Họ tên, email công ty, chức danh, cấp bậc, phòng ban và cost center. Email là định danh đăng nhập nên phải duy nhất.","Nhân sự"],
  ["Luồng phê duyệt","Người duyệt từng cấp cho mỗi người dùng, hoặc quy tắc duyệt theo cấp bậc và phòng ban.","Nhân sự"],
  ["Cost center và hạn mức tháng","Danh mục mã đơn vị theo hệ thống kế toán hiện tại, kèm hạn mức chi tiêu mỗi tháng.","Kế toán"],
  ["Chính sách lưu trú","Định mức một đêm phòng theo cấp bậc và nhóm địa điểm, kèm danh sách tỉnh thành thuộc từng nhóm.","Hành chính"],
  ["Chính sách vé máy bay","Hạng vé được phép và ngân sách theo cấp bậc, tách nội địa và quốc tế.","Hành chính"]
];

var RANKS=[
  "Rank 1 — Tổng giám đốc, Phó tổng",
  "Rank 2 — Giám đốc khối, Trưởng phòng",
  "Rank 3 — Phó phòng, Trưởng bộ phận",
  "Rank 4 — Chuyên viên, Nhân viên"
];

var DOCS_XP=[
  {id:"d1",n:"Biểu mẫu khởi tạo hệ thống",d:"Biểu mẫu duy nhất đối tác cần hoàn thiện và gửi lại.",
   in:["Thông tin doanh nghiệp","Danh sách người dùng","Cost center","Chính sách công tác"],dl:"templates/Bieu_mau_khoi_tao_he_thong_Phòng HCQT.xlsx"},
  {id:"d2",n:"Mẫu bảng kê dịch vụ",d:"Định dạng đối soát áp dụng mỗi kỳ, đề nghị bộ phận Kế toán rà soát trước.",
   in:["Bảng kê lưu trú","Bảng kê vé máy bay","Bảng kê theo phòng ban","Tổng hợp chi phí"],dl:"templates/Mau_bang_ke_Phòng HCQT.xlsx"},
  {id:"d3",n:"Hoá đơn mẫu",d:"Hoá đơn điện tử mẫu cho dịch vụ lưu trú và vé máy bay.",
   in:["Mẫu hoá đơn lưu trú","Mẫu hoá đơn vé máy bay"],dl:null},
  {id:"d4",n:"Dự thảo thư giới thiệu",d:"Rà soát và phát hành tới cơ sở lưu trú dưới danh nghĩa đối tác.",
   in:["Nội dung uỷ quyền","Thông tin liên hệ Phòng HCQT"],dl:null},
  {id:"d5",n:"Tài liệu hướng dẫn sử dụng",d:"Cung cấp trước buổi đào tạo cho từng nhóm người dùng.",
   in:["Hướng dẫn quản trị viên","Hướng dẫn người dùng","Hướng dẫn phê duyệt"],dl:null},
  {id:"d6",n:"Hồ sơ pháp lý và năng lực",d:"Phục vụ thủ tục thẩm định và phê duyệt nhà cung cấp.",
   in:["Giấy phép kinh doanh","Hồ sơ năng lực"],dl:null}
];

var DOCS_CL=[
  {id:"c1",n:"Biểu mẫu khởi tạo đã điền",d:"Dữ liệu đầu vào để cấu hình hệ thống.",
   in:["Danh sách người dùng","Cost center","Chính sách công tác","Luồng phê duyệt"]},
  {id:"c2",n:"Danh sách cơ sở lưu trú và hợp đồng giá",d:"Căn cứ cập nhật giá thoả thuận lên hệ thống.",
   in:["Tên cơ sở lưu trú","Mức giá theo hạng phòng","Thời hạn hiệu lực"]},
  {id:"c3",n:"Xác nhận đã phát hành thư giới thiệu",d:"Điều kiện để cơ sở lưu trú áp dụng giá thoả thuận cho giao dịch do Phòng HCQT thực hiện.",in:["Danh sách đã phát hành"]},
  {id:"c5",n:"Thông tin xuất hoá đơn",d:"Bảo đảm hoá đơn hợp lệ ngay từ kỳ đầu tiên.",
   in:["Tên, mã số thuế, địa chỉ","Email nhận hoá đơn","Tách theo cost center hay không"]},
  {id:"c6",n:"Biên bản kết luận đã xác nhận",d:"Căn cứ chính thức để Phòng HCQT triển khai cấu hình.",in:["Bốn nội dung cần thống nhất"]}
];
var DOCST=["Đang chờ","Đã gửi","Đã nhận","Không áp dụng"];

var CORE=[
  ["Xử lý giao dịch vượt định mức","Quyết định toàn bộ luồng phê duyệt trên hệ thống. Chưa thống nhất thì chưa thể cấu hình.","Ban lãnh đạo"],
  ["Phạm vi triển khai giai đoạn đầu","Xác định có áp dụng công tác nước ngoài ngay từ giai đoạn đầu hay triển khai ở giai đoạn tiếp theo.","Ban lãnh đạo"],
  ["Chu kỳ thanh toán và thời hạn cam kết","Cơ sở để đưa vào hợp đồng và thiết lập lịch chốt kỳ đối soát.","Tài chính"],
  ["Phương thức phát hành hoá đơn","Xuất gộp toàn kỳ hay tách theo từng cost center, ảnh hưởng đến quy trình vận hành và hạch toán mỗi kỳ.","Kế toán"]
];

var DOW=["T2","T3","T4","T5","T6","T7","CN"];
var MON=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
"Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];

var tasks=[],uid=0,calRef=new Date(),filt="",searchKeyword="";

function el(t,a,x){var e=document.createElement(t);if(a)for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;return e}
function $(s){return document.querySelector(s)}
function iso(d){return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function parse(s){if(!s)return null;var p=s.split("-");return new Date(+p[0],+p[1]-1,+p[2])}
function today(){var d=new Date();d.setHours(0,0,0,0);return d}
function dmy(s){var d=parse(s);return d?("0"+d.getDate()).slice(-2)+"/"+("0"+(d.getMonth()+1)).slice(-2):"—"}
function sideCls(s){return s==="Phòng HCQT"?"p-xp":s==="Nam Á Bank"?"p-cl":"p-bo"}
var KW=["kế hoạch triển khai","biểu mẫu khởi tạo","biên bản kết luận",
"chính sách công tác","giá thoả thuận","thư giới thiệu","hợp đồng hợp tác","cost center",
"quy trình xuất hoá đơn","tình huống giả định","người dùng","phạm vi","chính sách",
"khởi tạo","cấu hình","hợp đồng","Go-live","đào tạo","truyền thông","bảng kê","hoá đơn",
"khách sạn","đối soát","phê duyệt","demo","timeline","chủ trương","vận hành"];
KW.sort(function(a,b){return b.length-a.length});
function esc(t){return String(t).replace(/[&<>"]/g,function(c){
 return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function kw(t){
  var out=esc(t);
  KW.forEach(function(k){
    var re=new RegExp("(?![^<]*>)("+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi");
    out=out.replace(re,"\u0001$1\u0002");
  });
  return out.replace(/\u0001/g,"<b>").replace(/\u0002/g,"</b>");
}

/* ---------- Setup Logos ---------- */
var _xpLogo=$("#xpLogo");if(_xpLogo)_xpLogo.src="assets/xperise-logo.svg";
var _clLogo=$("#clLogo");if(_clLogo)_clLogo.src="assets/client-logo.svg";

/* ---------- client input update ---------- */
var clientInput=$('[data-k="client"]');
function updateClientTitle(){
  var name=clientInput.value.trim()||"Đối tác";
  var t=$("#stClTitle");if(t)t.textContent="Chờ "+name+" xử lý";
}
if(clientInput){
  clientInput.addEventListener("input",function(){
    updateClientTitle();
    autoSave();
  });
}

/* ---------- tabs ---------- */
var tabsBox=$("#tabs");
TABS.forEach(function(t,i){
  var b=el("button",{class:"tab",type:"button"},t[1]);
  b.setAttribute("aria-current",i===0?"true":"false");
  b.onclick=function(){
    TABS.forEach(function(x,j){
      document.getElementById(x[0]).classList.toggle("on",j===i);
      tabsBox.children[j].setAttribute("aria-current",j===i?"true":"false");
    });
    window.scrollTo(0,0);
    if(i===0)renderOverview();
  };
  tabsBox.appendChild(b);
});

/* ---------- tasks model ---------- */
function seed(){
  tasks=SEED.map(function(s){
    return {id:++uid,ph:s[0],n:s[1],side:s[2],dept:s[3],ms:!!s[4],pic:"",
            st:s[5]||"",due:s[6]||"",stt:s[7]||ST[0],note:s[8]||"",open:s[9]||""};
  });
}
function isLate(t){
  if(t.stt==="Hoàn thành"||!t.due)return false;
  var d=parse(t.due);return d&&d<today();
}

/* ---------- plan render ---------- */
function taskCard(t,compact){
  var c=el("div",{class:"tk"+(t.stt==="Hoàn thành"?" done":"")+(isLate(t)?" late":"")+(t.ms?" ms-row":"")});
  c.dataset.id=t.id;
  if(!compact){
    c.draggable=true;
    c.appendChild(el("div",{class:"tk-h",title:"Kéo để đổi thứ tự"},"⠿"));
  }
  var b=el("div",{class:"tk-b"});

  var r1=el("div",{class:"tk-r1"});
  if(compact){
    r1.appendChild(el("span",{class:"pill p-ph"},t.ph));
  }else{
    r1.appendChild(el("span",{class:"tk-no",title:"Bước "+(tasks.indexOf(t)+1)},t.stt==="Hoàn thành"?"✓":String(tasks.indexOf(t)+1)));
    r1.appendChild(pillSel(PHASES,t.ph,"p-ph",function(v){t.ph=v;refresh()}));
  }
  var nm=el("div",{class:"tk-name"});
  if(compact){
    var sp=el("div",{style:"font-size:14.5px;font-weight:500;padding:4px 2px;color:var(--gray-500)"});
    sp.innerHTML=kw(t.n||"(chưa đặt tên)");
    nm.appendChild(sp);
  }else{
    var ni=el("input");ni.type="text";ni.value=t.n;ni.placeholder="Nội dung công việc";
    ni.oninput=function(){t.n=ni.value;autoSave()};
    ni.onchange=function(){refresh()};
    nm.appendChild(ni);
  }
  r1.appendChild(nm);
  if(compact){
    r1.appendChild(el("span",{class:"pill "+sideCls(t.side)},t.side));
    if(t.dept&&t.dept!=="—")r1.appendChild(el("span",{class:"pill p-bo"},t.dept));
  }else{
    r1.appendChild(pillSel(SIDES,t.side,sideCls(t.side),function(v){t.side=v;refresh()}));
    r1.appendChild(pillSel(DEPTS,t.dept,"p-bo",function(v){t.dept=v;refresh()}));
  }
  b.appendChild(r1);

  var r2=el("div",{class:"tk-r2"});
  if(compact){
    r2.appendChild(el("span",{class:"fld"},isOpen(t)?whenText(t):"Hạn "+dmy(t.due)));
    if(t.pic)r2.appendChild(el("span",{class:"fld"},"· "+t.pic));
    if(isLate(t))r2.appendChild(el("span",{class:"pill",style:"background:var(--red-bg);color:var(--red)"},"Quá hạn"));
  }else{
    var ss=el("select",{class:"st-sel st-"+ST.indexOf(t.stt)});
    ST.forEach(function(o){var p=el("option",null,o);p.value=o;ss.appendChild(p)});
    ss.value=t.stt;
    ss.onchange=function(){t.stt=ss.value;refresh()};
    r2.appendChild(ss);
    var pi=el("input");pi.type="text";pi.value=t.pic;pi.placeholder="Chưa phân công";
    pi.oninput=function(){t.pic=pi.value;autoSave()};pi.onchange=refresh;
    pi.style.maxWidth="180px";
    r2.appendChild(fld(ico("user"),pi));
    var d1=el("input");d1.type="date";d1.value=t.st;
    d1.onchange=function(){t.st=d1.value;refresh()};
    var d2=el("input");d2.type="date";d2.value=t.due;
    d2.onchange=function(){t.due=d2.value;refresh()};
    if(isOpen(t))d2.title=t.open==="after"?"Sau ngày bắt đầu, chưa chốt hạn":"Từ ngày bắt đầu trở đi, không có hạn kết thúc";
    var dw=el("span",{class:"fld"});
    dw.appendChild(ico("cal"));
    if(isOpen(t)){
      var om=el("select",{title:"Mốc thời gian mở"});
      [["from","Từ"],["after","Sau"]].forEach(function(o){var q=el("option",null,o[1]);q.value=o[0];om.appendChild(q)});
      om.value=t.open==="after"?"after":"from";
      om.onchange=function(){t.open=om.value;refresh()};
      om.style.maxWidth="64px";
      dw.appendChild(om);
    }
    dw.appendChild(d1);
    dw.appendChild(el("span",{style:"color:var(--gray-400)"},"→"));dw.appendChild(d2);
    r2.appendChild(dw);
    if(isLate(t))r2.appendChild(el("span",{class:"pill",style:"background:var(--red-bg);color:var(--red)"},"Quá hạn"));
    var no=el("input");no.type="text";no.value=t.note;no.placeholder="Ghi chú";
    no.oninput=function(){t.note=no.value;autoSave()};no.style.maxWidth="200px";
    r2.appendChild(fld(null,no));
  }
  b.appendChild(r2);
  c.appendChild(b);

  if(!compact){
    var star=el("button",{class:"ms-btn"+(t.ms?" on":""),type:"button",title:"Đánh dấu mốc quan trọng"},"★");
    star.onclick=function(){t.ms=!t.ms;refresh()};
    c.appendChild(star);
    var x=el("button",{class:"tk-x",type:"button",title:"Xoá"},"×");
    x.onclick=function(){tasks=tasks.filter(function(q){return q.id!==t.id});refresh()};
    c.appendChild(x);
  }else if(t.ms){
    c.appendChild(el("span",{class:"ms-btn on"},"★"));
  }
  return c;
}
function fld(lbl,node){var f=el("span",{class:"fld"});
 if(lbl)f.appendChild(typeof lbl==="string"?el("span",null,lbl):lbl);
 f.appendChild(node);return f}
function pillSel(opts,val,cls,cb){
  var s=el("select",{class:"pill "+cls});
  opts.forEach(function(o){var p=el("option",null,o);p.value=o;s.appendChild(p)});
  s.value=val;s.onchange=function(){cb(s.value)};return s;
}
var ICONS={
 user:'<path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 1116 0"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>'};
function ico(n){
  var w=document.createElementNS("http://www.w3.org/2000/svg","svg");
  w.setAttribute("viewBox","0 0 24 24");w.setAttribute("fill","none");
  w.setAttribute("stroke","currentColor");w.setAttribute("stroke-width","1.8");
  w.setAttribute("stroke-linecap","round");w.innerHTML=ICONS[n]||"";
  return w;
}

function renderPlan(){
  var box=$("#plan");box.innerHTML="";
  var list=tasks;
  if(filt) list=list.filter(function(t){return t.ph===filt});
  if(searchKeyword){
    var kwLower=searchKeyword.toLowerCase();
    list=list.filter(function(t){
      return (t.n||"").toLowerCase().indexOf(kwLower)>=0 ||
             (t.pic||"").toLowerCase().indexOf(kwLower)>=0 ||
             (t.dept||"").toLowerCase().indexOf(kwLower)>=0 ||
             (t.side||"").toLowerCase().indexOf(kwLower)>=0;
    });
  }
  if(!list.length){box.appendChild(el("div",{class:"empty"},"Không có hạng mục phù hợp."));return}
  list.forEach(function(t){box.appendChild(taskCard(t,false))});
}

/* drag and drop */
var dragId=null;
$("#plan").addEventListener("dragstart",function(e){
  var c=e.target.closest(".tk");if(!c)return;
  dragId=+c.dataset.id;c.classList.add("dragging");
  e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain","")}catch(x){}
});
$("#plan").addEventListener("dragend",function(){
  document.querySelectorAll(".tk").forEach(function(c){c.classList.remove("dragging","over")});
  dragId=null;refresh();
});
$("#plan").addEventListener("dragover",function(e){
  e.preventDefault();
  var c=e.target.closest(".tk");if(!c||!dragId||+c.dataset.id===dragId)return;
  document.querySelectorAll(".tk").forEach(function(q){q.classList.remove("over")});
  c.classList.add("over");
  var over=+c.dataset.id;
  var from=tasks.findIndex(function(t){return t.id===dragId});
  var to=tasks.findIndex(function(t){return t.id===over});
  if(from<0||to<0)return;
  var r=c.getBoundingClientRect();
  var after=(e.clientY-r.top)/r.height>.5;
  var moved=tasks.splice(from,1)[0];
  var idx=tasks.findIndex(function(t){return t.id===over});
  tasks.splice(after?idx+1:idx,0,moved);
  renderPlan();
  var nc=document.querySelector('.tk[data-id="'+dragId+'"]');
  if(nc)nc.classList.add("dragging");
});

/* ---------- overview ---------- */
function renderOverview(){
  updateClientTitle();
  var done=tasks.filter(function(t){return t.stt==="Hoàn thành"}).length;
  var pct=tasks.length?Math.round(done/tasks.length*100):0;
  $("#ovPct").textContent=pct+"%";
  $("#ovCnt").textContent=done+" / "+tasks.length+" việc";
  var r=33,cir=2*Math.PI*r,fg=$("#ringFg");
  fg.style.strokeDasharray=cir;fg.style.strokeDashoffset=cir*(1-pct/100);

  var late=tasks.filter(isLate);
  $("#stLate").textContent=late.length;
  var cl=tasks.filter(function(t){return t.stt!=="Hoàn thành"&&t.side==="Nam Á Bank"});
  $("#stCl").textContent=cl.length;
  var dl={};cl.forEach(function(t){if(t.dept&&t.dept!=="—")dl[t.dept]=(dl[t.dept]||0)+1});
  var dk=Object.keys(dl).sort(function(a,b){return dl[b]-dl[a]});
  $("#stClDept").textContent=dk.length?dk.slice(0,2).join(", "):"—";

  var miss=0;
  DOCS_CL.forEach(function(d){
    var s=document.querySelector('[data-k="doc-'+d.id+'"]');
    if(s&&s.value!=="Đã nhận"&&s.value!=="Không áp dụng")miss++;
  });
  $("#stDoc").textContent=miss;

  // status line
  var gv=$("#gvInput").value;
  var line;
  if(!gv){line="Vui lòng xác nhận ngày vận hành chính thức mục tiêu để bắt đầu theo dõi tiến độ.";}
  else{
    var d=Math.ceil((parse(gv)-today())/86400000);
    var cur=null;
    for(var i=0;i<PHASES.length;i++){
      var ps=tasks.filter(function(t){return t.ph===PHASES[i]});
      if(ps.length&&ps.some(function(t){return t.stt!=="Hoàn thành"})){cur=PHASES[i];break}
    }
    line="Dự án đang ở giai đoạn <b>"+(cur||"hoàn tất")+"</b>. "+
      (d>0?"Còn <b>"+d+" ngày</b> đến ngày vận hành chính thức.":d===0?"<b>Hôm nay là ngày vận hành chính thức.</b>":"Đã quá ngày vận hành chính thức <b>"+(-d)+" ngày</b>.")+
      (late.length?" Hiện có <b>"+late.length+" hạng mục quá hạn</b> cần xử lý.":"");
  }
  $("#statusLine").innerHTML=line;

  // go-live chip + date
  if(gv){
    var g=parse(gv);
    $("#gvDate").textContent=("0"+g.getDate()).slice(-2)+"/"+("0"+(g.getMonth()+1)).slice(-2)+"/"+g.getFullYear();
    var dd=Math.ceil((g-today())/86400000);
    $("#gvCount").innerHTML=dd>0?"còn <b>"+dd+" ngày</b>":dd===0?"<b>hôm nay</b>":"đã qua <b>"+(-dd)+" ngày</b>";
    $("#chipLive").textContent="Go-live "+("0"+g.getDate()).slice(-2)+"/"+("0"+(g.getMonth()+1)).slice(-2);
  }else{
    $("#gvDate").textContent="Chưa đặt";$("#gvCount").textContent="—";$("#chipLive").textContent="Go-live —";
  }

  // phases
  var pb=$("#phases");pb.innerHTML="";
  PHASES.forEach(function(p){
    var ps=tasks.filter(function(t){return t.ph===p});
    var d=ps.filter(function(t){return t.stt==="Hoàn thành"}).length;
    var pc=ps.length?Math.round(d/ps.length*100):0;
    var row=el("div",{class:"phrow"});
    row.appendChild(el("div",{class:"nm"},p));
    var tr=el("div",{class:"tr"}),bar=el("div",{class:"pbar"}),f=el("i");
    f.style.width=pc+"%";bar.appendChild(f);tr.appendChild(bar);row.appendChild(tr);
    row.appendChild(el("div",{class:"pc"},ps.length?pc+"%":"—"));
    pb.appendChild(row);
  });

  // waiting on whom
  var bd=$("#byDept");bd.innerHTML="";
  var groups={};
  tasks.filter(function(t){return t.stt!=="Hoàn thành"}).forEach(function(t){
    var k=t.side==="Phòng HCQT"?"Phòng HCQT":t.side==="Hai bên"?"Hai bên":
          (t.dept&&t.dept!=="—"?t.dept:"Nam Á Bank");
    (groups[k]=groups[k]||[]).push(t);
  });
  var keys=Object.keys(groups).sort(function(a,b){
    var la=groups[a].filter(isLate).length,lb=groups[b].filter(isLate).length;
    if(la!==lb)return lb-la;
    var da=groups[a].filter(function(t){return t.due})[0];
    var db=groups[b].filter(function(t){return t.due})[0];
    return (da&&da.due||"9")<(db&&db.due||"9")?-1:1;
  });
  if(!keys.length)bd.appendChild(el("div",{class:"empty",style:"padding:14px"},"Không còn hạng mục tồn đọng."));
  keys.forEach(function(k){
    var g=groups[k].slice().sort(function(a,b){return (a.due||"9")<(b.due||"9")?-1:1});
    var wrap=el("div",{style:"padding:10px 0;border-bottom:1px solid var(--gray-100)"});
    var hd=el("div",{style:"display:flex;align-items:center;gap:8px;margin-bottom:6px"});
    hd.appendChild(el("span",{class:"pill "+(k==="Phòng HCQT"?"p-xp":k==="Hai bên"?"p-bo":"p-cl")},k));
    var lt=g.filter(isLate).length;
    if(lt)hd.appendChild(el("span",{class:"pill",style:"background:var(--red-bg);color:var(--red)"},lt+" hạng mục quá hạn"));
    hd.appendChild(el("span",{style:"flex:1"},""));
    if(g.length>2)hd.appendChild(el("span",{style:"font-size:11.5px;color:var(--gray-400)"},"+"+(g.length-2)+" hạng mục khác"));
    wrap.appendChild(hd);
    g.slice(0,2).forEach(function(t){
      var r=el("div",{style:"display:flex;gap:9px;align-items:baseline;padding:3px 0;font-size:13px"});
      var d=el("span",{style:"flex:0 0 42px;font-weight:700;font-variant-numeric:tabular-nums;color:"+(isLate(t)?"var(--red)":"var(--purple-dark)")},dmy(t.due));
      r.appendChild(d);
      var n=el("span",{style:"flex:1;color:var(--gray-500)"});
      n.innerHTML=kw(t.n||"(chưa đặt tên)");
      r.appendChild(n);
      wrap.appendChild(r);
    });
    bd.appendChild(wrap);
  });

  // next up
  var nu=$("#nextUp");nu.innerHTML="";
  var open=tasks.filter(function(t){return t.stt!=="Hoàn thành"});
  open.sort(function(a,b){
    if(!!a.due!==!!b.due)return a.due?-1:1;
    if(a.due&&b.due)return a.due<b.due?-1:1;
    return 0;
  });
  if(!open.length)nu.appendChild(el("div",{class:"empty"},"Toàn bộ hạng mục đã hoàn thành."));
  open.slice(0,6).forEach(function(t){nu.appendChild(taskCard(t,true))});

  renderCal();
}

/* ---------- calendar ---------- */
function events(){
  var ev={};
  function add(d,o){if(!d)return;(ev[d]=ev[d]||[]).push(o)}
  tasks.forEach(function(t){
    var cd=t.due||(isOpen(t)&&t.open!=="after"?t.st:"");
    if(cd)add(cd,{t:t.n||"(chưa đặt tên)",ms:t.ms,late:isLate(t),side:t.side,
      done:t.stt==="Hoàn thành",dept:t.dept});
  });
  var gv=$("#gvInput").value;
  if(gv){
    var dup=(ev[gv]||[]).some(function(x){return /go-?live/i.test(x.t)});
    if(dup){(ev[gv]||[]).forEach(function(x){if(/go-?live/i.test(x.t))x.live=true})}
    else add(gv,{t:"Go-live chính thức",live:true});
  }
  Object.keys(ev).forEach(function(k){
    ev[k].sort(function(a,b){
      var r=function(x){return x.live?0:x.late?1:x.ms?2:3};
      return r(a)-r(b);
    });
  });
  return ev;
}
function chipCls(x){
  if(x.live)return "ch-live";
  if(x.late)return "ch-late";
  if(x.ms)return "ch-ms";
  if(x.side==="Phòng HCQT")return "ch-xp";
  if(x.side==="Nam Á Bank")return "ch-cl";
  return "ch-bo";
}
function renderCal(){
  var grid=$("#calGrid"),ev=events();
  grid.innerHTML="";
  var y=calRef.getFullYear(),m=calRef.getMonth();
  $("#calTitle").textContent=MON[m]+" "+y;
  DOW.forEach(function(d){grid.appendChild(el("div",{class:"cal-dow"},d))});
  var first=new Date(y,m,1);
  var off=(first.getDay()+6)%7;
  var start=new Date(y,m,1-off);
  var last=new Date(y,m+1,0);
  var cells=Math.ceil((off+last.getDate())/7)*7;
  var td=iso(today());
  for(var i=0;i<cells;i++){
    var d=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i);
    var k=iso(d),list=ev[k]||[];
    var cls="cal-d";
    if(d.getMonth()!==m)cls+=" out";
    if(d.getDay()===0||d.getDay()===6)cls+=" wk";
    if(k===td)cls+=" today";
    if(list.some(function(x){return x.live}))cls+=" liveday";
    var cell=el("div",{class:cls});
    cell.appendChild(el("span",{class:"dn"},String(d.getDate())));
    var show=list.slice(0,3);
    show.forEach(function(x){
      var b=el("button",{class:"cal-ch "+chipCls(x),type:"button",title:x.t});
      b.textContent=x.t;
      if(x.done)b.style.opacity=".55";
      (function(kk){b.onclick=function(e){e.stopPropagation();showDay(kk,ev[kk])}})(k);
      cell.appendChild(b);
    });
    if(list.length>3){
      var mo=el("div",{class:"cal-more"},"+"+(list.length-3)+" hạng mục");
      (function(kk){mo.onclick=function(){showDay(kk,ev[kk])}})(k);
      cell.appendChild(mo);
    }
    grid.appendChild(cell);
  }
  var box=$("#calList");box.innerHTML="";
  var keys=Object.keys(ev).sort();
  var up=keys.filter(function(k){return k>=td}).slice(0,4);
  if(!up.length){box.appendChild(el("div",{style:"font-size:13px;color:var(--gray-500)"},
    "Chưa có mốc thời gian sắp tới. Vui lòng bổ sung thời hạn tại mục Kế hoạch triển khai."));return}
  box.appendChild(el("div",{style:"font-size:11.5px;font-weight:700;letter-spacing:.9px;text-transform:uppercase;color:var(--gray-500);margin-bottom:7px"},"Sắp tới"));
  up.forEach(function(k){
    ev[k].forEach(function(x){
      var r=el("div",{class:"cal-ev"});
      r.appendChild(el("div",{class:"d"},dmy(k)));
      var nm=el("div",{style:"flex:1"});
      nm.innerHTML=kw(x.t);
      if(x.live)nm.style.fontWeight="700";
      r.appendChild(nm);
      if(x.late)r.appendChild(el("span",{class:"pill",style:"background:var(--red-bg);color:var(--red)"},"Quá hạn"));
      else if(x.ms)r.appendChild(el("span",{class:"pill p-cl"},"Mốc"));
      box.appendChild(r);
    });
  });
}
function showDay(k,list){
  var box=$("#calList");box.innerHTML="";
  box.appendChild(el("div",{style:"font-size:11.5px;font-weight:700;letter-spacing:.9px;text-transform:uppercase;color:var(--gray-500);margin-bottom:7px"},"Ngày "+dmy(k)));
  list.forEach(function(x){
    var r=el("div",{class:"cal-ev"});
    r.appendChild(el("div",{class:"d"},dmy(k)));
    var n2=el("div",{style:"flex:1"});n2.innerHTML=kw(x.t);r.appendChild(n2);
    box.appendChild(r);
  });
  var b=el("button",{class:"btn btn-o btn-s",style:"margin-top:9px"},"Quay lại danh sách");
  b.onclick=renderCal;box.appendChild(b);
}
$("#calPrev").onclick=function(){calRef=new Date(calRef.getFullYear(),calRef.getMonth()-1,1);renderCal()};
$("#calNext").onclick=function(){calRef=new Date(calRef.getFullYear(),calRef.getMonth()+1,1);renderCal()};
$("#calToday").onclick=function(){calRef=new Date();renderCal()};
$("#gvInput").onchange=function(){
  var v=$("#gvInput").value;if(v)calRef=parse(v);
  refresh();
};

/* ---------- flow diagram (swimlane) ---------- */
var flowFocus="";
function laneOf(t){
  var d=(t.dept&&t.dept!=="—")?t.dept:"";
  if(t.side==="Phòng HCQT")return "xp";
  if(t.side==="Nam Á Bank")return "cl:"+(d||"—");
  return d?"cl:"+d:"bo";
}
function laneKeys(){
  var has={};tasks.forEach(function(t){has[laneOf(t)]=1});
  var out=[];
  DEPTS.forEach(function(d){if(d!=="—"&&has["cl:"+d])out.push("cl:"+d)});
  Object.keys(has).forEach(function(k){if(k.indexOf("cl:")===0&&k!=="cl:—"&&out.indexOf(k)<0)out.push(k)});
  if(has["cl:—"])out.push("cl:—");
  out.push("bo","xp");
  return out;
}
function laneMeta(k){
  if(k==="xp")return {c:"xp",pt:"Đơn vị triển khai",nm:"Phòng HCQT"};
  if(k==="bo")return {c:"bo",pt:"Phòng HCQT và Đối tác",nm:"Hai bên"};
  var d=k.slice(3);
  var clName=(clientInput&&clientInput.value.trim())||"Nam Á Bank";
  return d==="—"?{c:"cl",pt:"Chưa phân phòng ban",nm:clName}:{c:"cl",pt:clName,nm:d};
}
function isPair(t){return t.side==="Hai bên"&&t.dept&&t.dept!=="—"}
function stNo(t){return tasks.indexOf(t)+1}
function span(a,b){
  if(!a&&!b)return "Chưa có thời hạn";
  if(!a||a===b)return dmy(b||a);
  if(!b)return "Từ "+dmy(a);
  return dmy(a)+" → "+dmy(b);
}
function isOpen(t){return !!(t.st&&!t.due)}
function whenText(t){
  if(isOpen(t))return t.open==="after"?"Sau "+dmy(t.st):"Từ "+dmy(t.st)+" trở đi";
  return span(t.st,t.due);
}
function stTag(t){
  if(isLate(t))return el("span",{class:"fl-tag late"},"Quá hạn");
  var i=ST.indexOf(t.stt);if(i<0)i=0;
  var g=el("span",{class:"fl-tag s"+i});g.appendChild(el("i"));g.appendChild(document.createTextNode(ST[i]));
  return g;
}
function goTask(id){
  if(filt||searchKeyword){
    filt="";$("#filt").value="";
    searchKeyword="";$("#taskSearch").value="";
    renderPlan();
  }
  var c=document.querySelector('#plan .tk[data-id="'+id+'"]');if(!c)return;
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  c.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});
  document.querySelectorAll("#plan .tk.flash").forEach(function(q){q.classList.remove("flash")});
  c.classList.add("flash");
  setTimeout(function(){c.classList.remove("flash")},2200);
}
function pairHi(id,on){
  document.querySelectorAll('[data-fid="'+id+'"]').forEach(function(n){n.classList.toggle("hi",on)});
}
function bindPair(node,t){
  node.dataset.fid=t.id;
  node.onmouseenter=function(){pairHi(t.id,true)};
  node.onmouseleave=function(){pairHi(t.id,false)};
  node.onfocus=function(){pairHi(t.id,true)};
  node.onblur=function(){pairHi(t.id,false)};
  node.onclick=function(){goTask(t.id)};
}
function flowCard(t,m){
  var done=t.stt==="Hoàn thành";
  var b=el("button",{type:"button",class:"fl-c "+m.c+(t.ms?" ms":"")+(done?" done":"")+(isLate(t)?" late":"")});
  var r=el("div",{class:"r"});
  r.appendChild(el("span",{class:"fl-n"},done?"✓":String(stNo(t))));
  r.appendChild(el("span",{class:"dt"},whenText(t)));
  if(t.ms)r.appendChild(el("span",{class:"star",title:"Mốc quan trọng"},"★"));
  b.appendChild(r);
  b.appendChild(el("div",{class:"nm"},t.n||"(chưa đặt tên)"));
  var ft=el("div",{class:"ft"});
  ft.appendChild(stTag(t));
  if(isPair(t))ft.appendChild(el("span",{class:"fl-tag with"},"Cùng Phòng HCQT"));
  if(t.pic)ft.appendChild(el("span",{class:"fl-tag s0"},t.pic));
  b.appendChild(ft);
  b.setAttribute("aria-label","Bước "+stNo(t)+": "+(t.n||"chưa đặt tên")+", "+whenText(t)+", "+t.stt);
  bindPair(b,t);
  return b;
}
function ghostCard(t){
  var g=el("button",{type:"button",class:"fl-g"});
  g.dataset.dept=t.dept;
  var r=el("div",{class:"r"});
  r.appendChild(el("span",{class:"fl-n"},String(stNo(t))));
  r.appendChild(el("span",null,"Phối hợp cùng "+t.dept));
  g.appendChild(r);
  g.appendChild(el("div",{class:"nm"},t.n||"(chưa đặt tên)"));
  g.setAttribute("aria-label","Bước "+stNo(t)+", Phòng HCQT phối hợp cùng "+t.dept+": "+(t.n||""));
  bindPair(g,t);
  return g;
}
function renderFlow(){
  var grid=$("#flGrid"),units=$("#flUnits");
  if(!grid)return;
  var keys=laneKeys();
  if(flowFocus&&keys.indexOf(flowFocus)<0)flowFocus="";
  grid.innerHTML="";grid.style.setProperty("--cols",PHASES.length);

  // header
  var cur=null;
  for(var i=0;i<PHASES.length;i++){
    var ps=tasks.filter(function(t){return t.ph===PHASES[i]});
    if(ps.length&&ps.some(function(t){return t.stt!=="Hoàn thành"})){cur=PHASES[i];break}
  }
  grid.appendChild(el("div",{class:"fl-corner"},"Đơn vị phụ trách"));
  var reached=false;
  PHASES.forEach(function(p,i){
    var ps=tasks.filter(function(t){return t.ph===p});
    var st=ps.map(function(t){return t.st||t.due}).filter(Boolean).sort()[0];
    var du=ps.map(function(t){return t.due||t.st}).filter(Boolean).sort().pop();
    if(p===cur)reached=true;
    var fin=ps.length&&!reached&&cur!==p&&ps.every(function(t){return t.stt==="Hoàn thành"});
    var h=el("div",{class:"fl-ph"+(i===0?" first":"")+(i===PHASES.length-1?" last":"")+(p===cur?" cur":"")+(fin?" fin":"")});
    var t=el("div",{class:"t"});
    t.appendChild(el("span",{class:"no"},fin?"✓":String(i+1)));
    t.appendChild(el("span",null,p));
    h.appendChild(t);
    h.appendChild(el("div",{class:"d"},ps.length?(ps.some(isOpen)?"Từ "+dmy(st)+" trở đi":span(st,du))+(p===cur?", đang thực hiện":""):"Chưa có hạng mục"));
    grid.appendChild(h);
  });

  // lanes
  var fm=flowFocus?laneMeta(flowFocus):null;
  keys.forEach(function(k,li){
    var m=laneMeta(k);
    var own=tasks.filter(function(t){return laneOf(t)===k});
    var pairs=k==="xp"?tasks.filter(isPair):[];
    var open=own.filter(function(t){return t.stt!=="Hoàn thành"}).length;
    var late=own.filter(isLate).length;
    var grp=(li>0&&laneMeta(keys[li-1]).c!==m.c)?" grp":"";
    var dim=flowFocus&&flowFocus!==k?" dim":"";
    var lab=el("div",{class:"fl-lab "+m.c+grp+dim});
    lab.appendChild(el("div",{class:"pt"},m.pt));
    lab.appendChild(el("div",{class:"nm"},m.nm));
    var ct=el("div",{class:"ct"});
    ct.textContent=own.length?(open+" / "+own.length+" việc chưa xong"):"Chưa có hạng mục";
    if(pairs.length)ct.textContent+=", phối hợp "+pairs.length+" việc";
    if(late){ct.appendChild(document.createTextNode(", "));ct.appendChild(el("b",null,late+" quá hạn"))}
    lab.appendChild(ct);
    grid.appendChild(lab);
    PHASES.forEach(function(p){
      var cell=el("div",{class:"fl-cell "+m.c+grp});
      var mine=own.filter(function(t){return t.ph===p});
      var gh=pairs.filter(function(t){return t.ph===p});
      var list=mine.map(function(t){return {t:t,g:false}}).concat(gh.map(function(t){return {t:t,g:true}}));
      list.sort(function(a,b){return stNo(a.t)-stNo(b.t)});
      list.forEach(function(x){
        var n=x.g?ghostCard(x.t):flowCard(x.t,m);
        if(flowFocus&&flowFocus!==k){
          var keep=x.g&&fm&&fm.c==="cl"&&("cl:"+x.t.dept)===flowFocus;
          if(!keep)n.classList.add("dim");
        }
        cell.appendChild(n);
      });
      grid.appendChild(cell);
    });
  });

  // unit chips
  units.innerHTML="";
  function chip(k,label,dot,count){
    var b=el("button",{type:"button",class:"fl-chip"});
    b.setAttribute("aria-pressed",flowFocus===k?"true":"false");
    if(dot)b.appendChild(el("i",{class:"dot-"+dot}));
    b.appendChild(document.createTextNode(label));
    if(count!=null)b.appendChild(el("span",{class:"ct"},String(count)));
    b.onclick=function(){flowFocus=(flowFocus===k?"":k);renderFlow()};
    units.appendChild(b);
  }
  chip("","Tất cả đơn vị",null,null);
  units.appendChild(el("span",{class:"sep"}));
  var clk=keys.filter(function(k){return k.indexOf("cl:")===0});
  var clTitle=(clientInput&&clientInput.value.trim())||"Đối tác";
  if(clk.length){
    units.appendChild(el("span",{class:"gl"},clTitle));
    clk.forEach(function(k){chip(k,laneMeta(k).nm,"cl",tasks.filter(function(t){return laneOf(t)===k}).length)});
    units.appendChild(el("span",{class:"sep"}));
  }
  chip("bo","Hai bên","bo",tasks.filter(function(t){return laneOf(t)==="bo"}).length);
  chip("xp","Phòng HCQT","xp",tasks.filter(function(t){return laneOf(t)==="xp"||isPair(t)}).length);

  // focused to-do list
  var td=$("#flTodo");td.innerHTML="";
  if(!flowFocus){td.hidden=true;return}
  td.hidden=false;
  var items=tasks.filter(function(t){return laneOf(t)===flowFocus||(flowFocus==="xp"&&isPair(t))});
  var left=items.filter(function(t){return t.stt!=="Hoàn thành"}).length;
  td.appendChild(el("h4",null,"Phần việc của "+(fm.c==="cl"&&fm.nm!==clTitle?clTitle+", phòng "+fm.nm:fm.nm)));
  td.appendChild(el("div",{class:"sm"},items.length?(left+" trên "+items.length+" hạng mục chưa hoàn thành, sắp theo trình tự thực hiện."):"Chưa có hạng mục."));
  items.forEach(function(t){
    var done=t.stt==="Hoàn thành";
    var r=el("div",{class:"fl-row"+(done?" done":""),tabindex:"0",role:"button"});
    var n=el("span",{class:"fl-n"},done?"✓":String(stNo(t)));
    if(t.ms&&!done)n.style.background="var(--gradient)";
    r.appendChild(n);
    r.appendChild(el("span",{class:"dt"},whenText(t)));
    r.appendChild(el("span",{class:"nm"},t.n||"(chưa đặt tên)"));
    var tg=el("span",{class:"tg"});
    if(isPair(t))tg.appendChild(el("span",{class:"fl-tag "+(flowFocus==="xp"?"with2":"with")},flowFocus==="xp"?"Cùng "+t.dept:"Cùng Phòng HCQT"));
    tg.appendChild(stTag(t));
    r.appendChild(tg);
    r.onclick=function(){goTask(t.id)};
    r.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();goTask(t.id)}};
    td.appendChild(r);
  });
}

function refresh(){
  renderPlan();
  renderFlow();
  renderOverview();
  autoSave();
}

/* ---------- filter & search ---------- */
(function(){
  var f=$("#filt");
  PHASES.forEach(function(p){var o=el("option",null,p);o.value=p;f.appendChild(o)});
  f.onchange=function(){filt=f.value;renderPlan()};

  var s=$("#taskSearch");
  if(s){
    s.oninput=function(){
      searchKeyword=s.value.trim();
      renderPlan();
    };
  }
})();

$("#addTask").onclick=function(){
  tasks.push({id:++uid,ph:filt||PHASES[0],n:"",side:SIDES[0],dept:"—",ms:false,pic:"",st:"",due:"",stt:ST[0],note:""});
  refresh();
};
$("#resetTask").onclick=function(){
  if(confirm("Khôi phục danh mục gốc? Toàn bộ nội dung công việc sẽ được thiết lập lại về ban đầu.")) {
    uid=0;
    seed();
    refresh();
  }
};

/* ---------- docs ---------- */
function docCard(d,owner){
  var c=el("div",{class:"doc"});
  c.appendChild(el("div",{class:"doc-ic"+((owner==="cl"||!d.dl)?" cl":"")},d.dl?"XLS":"DOC"));
  var b=el("div",{class:"doc-b"});
  b.appendChild(el("h4",null,d.n));
  b.appendChild(el("div",{class:"d"},d.d));
  var inn=el("div",{class:"doc-in"});
  d.in.forEach(function(x){inn.appendChild(el("span",null,x))});
  b.appendChild(inn);
  var f=el("div",{class:"doc-f"});
  var s=el("select",{"data-k":"doc-"+d.id});
  DOCST.forEach(function(o){var p=el("option",null,o);p.value=o;s.appendChild(p)});
  s.value=owner==="cl"?"Đang chờ":"Đã gửi";
  function paint(){
    var v=s.value;
    s.style.background=v==="Đã nhận"?"rgba(0,166,147,.12)":v==="Đã gửi"?"rgba(176,65,255,.1)":
      v==="Không áp dụng"?"var(--gray-100)":"var(--amber-bg)";
    s.style.color=v==="Đã nhận"?"var(--green-dark)":v==="Đã gửi"?"var(--purple-dark)":
      v==="Không áp dụng"?"var(--gray-500)":"var(--amber)";
  }
  s.onchange=function(){paint();renderOverview();autoSave()};paint();
  f.appendChild(s);
  if(d.dl){
    var btn=el("button",{class:"btn btn-p btn-s",type:"button"}, "Tải mẫu");
    btn.onclick=function(){download(d.id)};
    f.appendChild(btn);
  }
  b.appendChild(f);c.appendChild(b);
  return c;
}

DOCS_XP.forEach(function(d){$("#docsXp").appendChild(docCard(d,"xp"))});
DOCS_CL.forEach(function(d){$("#docsCl").appendChild(docCard(d,"cl"))});
$("#formDoc").appendChild(docCard(DOCS_XP[0],"xp"));
$("#stmtDoc").appendChild(docCard(DOCS_XP[1],"xp"));

/* ---------- cycle cards ---------- */
(function(){
  var c1=[["Gửi hồ sơ thanh toán","15"],["Hạn xác nhận","18"],["Xuất hoá đơn","18"],["Hạn thanh toán","25"]];
  var c2=[["Gửi hồ sơ thanh toán","01","tháng sau"],["Hạn xác nhận","04","tháng sau"],["Xuất hoá đơn","04","tháng sau"],["Hạn thanh toán","11","tháng sau"]];
  function fill(box,rows){
    rows.forEach(function(r,i){
      var w=el("div",{style:"display:flex;align-items:center;gap:12px;padding:9px 0"+(i<rows.length-1?";border-bottom:1px solid var(--gray-100)":"")});
      w.appendChild(el("div",{style:"flex:1;font-size:13.5px;color:var(--gray-500)"},r[0]));
      var big=el("div",{style:"font-family:var(--font-d);font-size:22px;"+(i===rows.length-1?"color:var(--purple-dark)":"")},"Ngày "+r[1]);
      w.appendChild(big);
      if(r[2])w.appendChild(el("span",{style:"font-size:11px;color:var(--gray-400);margin-left:-6px"},r[2]));
      box.appendChild(w);
    });
  }
  fill($("#cyc1"),c1);fill($("#cyc2"),c2);
})();

/* ---------- static tables ---------- */
(function(){
  var b=document.querySelector("#groups tbody");
  GROUPS.forEach(function(g,i){
    var tr=el("tr");
    var c0=el("td",{class:"mid"});var cb=el("input");cb.type="checkbox";cb.setAttribute("data-k","g"+i);
    cb.onchange=autoSave;
    c0.appendChild(cb);tr.appendChild(c0);
    var c1=el("td");c1.appendChild(el("b",null,g[0]));tr.appendChild(c1);
    tr.appendChild(el("td",null,g[1]));tr.appendChild(el("td",null,g[2]));
    var c4=el("td");var di=el("input");di.type="date";di.setAttribute("data-k","gd"+i);
    di.onchange=autoSave;
    c4.appendChild(di);tr.appendChild(c4);
    b.appendChild(tr);
  });
  var h=$("#mxHotel");
  RANKS.forEach(function(r,i){
    var tr=el("tr");tr.appendChild(el("td",null,r));
    ["A","B","C","D"].forEach(function(g){
      var c=el("td");var x=el("input");x.type="text";x.setAttribute("data-k","h"+i+g);x.placeholder="—";
      x.style.textAlign="center";x.oninput=autoSave;c.appendChild(x);tr.appendChild(c);
    });h.appendChild(tr);
  });
  var l=$("#mxLoc");
  ["Nhóm A","Nhóm B","Nhóm C","Nhóm D"].forEach(function(g,i){
    var tr=el("tr");var c0=el("td");c0.appendChild(el("b",null,g));tr.appendChild(c0);
    var c1=el("td");var x=el("input");x.type="text";x.setAttribute("data-k","loc"+i);
    x.placeholder="Liệt kê tỉnh thành";x.oninput=autoSave;c1.appendChild(x);tr.appendChild(c1);l.appendChild(tr);
  });
  var CLS=["Phổ thông","Phổ thông linh hoạt","Thương gia"];
  var f=$("#mxFlight");
  RANKS.forEach(function(r,i){
    var tr=el("tr");tr.appendChild(el("td",null,r));
    [["fdc","fdb"],["fic","fib"]].forEach(function(p){
      var c=el("td");var s=el("select");s.setAttribute("data-k",p[0]+i);
      CLS.forEach(function(o){var q=el("option",null,o);q.value=o;s.appendChild(q)});
      s.onchange=autoSave;
      c.appendChild(s);tr.appendChild(c);
      var c2=el("td");var x=el("input");x.type="text";x.setAttribute("data-k",p[1]+i);x.placeholder="—";
      x.style.textAlign="center";x.oninput=autoSave;c2.appendChild(x);tr.appendChild(c2);
    });f.appendChild(tr);
  });
  var a=$("#mxAppr"),an=0;
  function apprRow(sc){
    var id="ap"+(++an),tr=el("tr");
    [["-sc",sc||""],["-1",""],["-2",""],["-3",""],["-th",""]].forEach(function(p,i){
      var c=el("td");var x=el("input");x.type="text";x.setAttribute("data-k",id+p[0]);
      x.value=p[1];
      x.placeholder=i===0?"Phạm vi":i===4?"Ví dụ trên 20 triệu":i===3?"Để trống nếu không dùng":"Chức danh";
      x.oninput=autoSave;
      c.appendChild(x);tr.appendChild(c);
    });
    return tr;
  }
  ["Toàn bộ giao dịch","Giao dịch vượt hạn mức"].forEach(function(s){a.appendChild(apprRow(s))});
  $("#addAppr").onclick=function(){a.appendChild(apprRow(""));autoSave()};

  var cb2=document.querySelector("#core tbody");
  CORE.forEach(function(c,i){
    var tr=el("tr");
    tr.appendChild(el("td",{class:"mid"},String(i+1)));
    var c1=el("td");c1.appendChild(el("b",null,c[0]));tr.appendChild(c1);
    tr.appendChild(el("td",null,c[1]));tr.appendChild(el("td",null,c[2]));
    var c4=el("td");var s=el("select");s.setAttribute("data-k","core"+i);
    ST.forEach(function(o){var p=el("option",null,o);p.value=o;s.appendChild(p)});
    s.onchange=autoSave;
    c4.appendChild(s);tr.appendChild(c4);
    var c5=el("td");var t=el("textarea");t.setAttribute("data-k","cores"+i);t.rows=1;
    t.placeholder="Kết luận";t.oninput=autoSave;c5.appendChild(t);tr.appendChild(c5);
    cb2.appendChild(tr);
  });
})();

/* ---------- add-row tables ---------- */
function mkTable(sel,btnId,cols){
  var b=document.querySelector(sel+" tbody"),n=0,pfx=sel.replace(/\W/g,"");
  function renum(){Array.prototype.forEach.call(b.rows,function(r,i){r.cells[0].textContent=String(i+1)})}
  function row(){
    var id=pfx+(++n),tr=el("tr");
    tr.appendChild(el("td",{class:"mid"},""));
    cols.forEach(function(c){
      var cell=el("td");
      var x;
      if(c.t==="sel"){
        x=el("select");c.o.forEach(function(o){var p=el("option",null,o);p.value=o;x.appendChild(p)});
        x.onchange=autoSave;
      }
      else if(c.t==="ta"){x=el("textarea");x.rows=1;x.oninput=autoSave}
      else{x=el("input");x.type=c.t;x.oninput=autoSave}
      x.setAttribute("data-k",id+c.k);if(c.p)x.placeholder=c.p;
      cell.appendChild(x);tr.appendChild(cell);
    });
    var cx=el("td",{class:"mid"});
    var bt=el("button",{class:"tk-x",type:"button",title:"Xoá"},"×");
    bt.onclick=function(){tr.remove();renum();autoSave()};
    cx.appendChild(bt);tr.appendChild(cx);
    return tr;
  }
  document.getElementById(btnId).onclick=function(){b.appendChild(row());renum();autoSave()};
  return {add:function(){b.appendChild(row());renum()},count:function(){return b.rows.length}};
}
var reqT=mkTable("#req","addReq",[
  {t:"ta",k:"-q",p:"Ví dụ: bổ sung cột mã nhân viên"},{t:"text",k:"-by",p:"Tên"},
  {t:"sel",k:"-pri",o:["Bắt buộc","Mong muốn","Tham khảo"]},{t:"ta",k:"-ans",p:"Phòng HCQT phản hồi"}]);
var hotelT=mkTable("#hotels","addHotel",[
  {t:"text",k:"-n",p:"Tên cơ sở lưu trú"},{t:"text",k:"-c",p:"Thành phố"},
  {t:"sel",k:"-ct",o:["Chưa rõ","Có","Không"]},{t:"text",k:"-no"},
  {t:"sel",k:"-ml",o:["Chưa gửi","Đã gửi","Đã xác nhận"]}]);
var noteT=mkTable("#notes","addNote",[
  {t:"ta",k:"-n",p:"Nội dung ghi nhận"},{t:"text",k:"-by",p:"Tên"},
  {t:"text",k:"-pic",p:"Tên"},{t:"date",k:"-d"},{t:"sel",k:"-st",o:ST}]);
for(var i=0;i<3;i++)reqT.add();
for(var j=0;j<5;j++)hotelT.add();
for(var k=0;k<3;k++)noteT.add();

/* ---------- Auto-Save to LocalStorage ---------- */
var saveTimeout=null;
function autoSave(){
  if(saveTimeout) clearTimeout(saveTimeout);
  saveTimeout=setTimeout(function(){
    var state=buildState();
    try {
      localStorage.setItem("xperise_onboarding_state", JSON.stringify(state));
      var badge=$("#saveBadge");
      if(badge){
        var now=new Date();
        var timeStr=("0"+now.getHours()).slice(-2)+":"+("0"+now.getMinutes()).slice(-2)+":"+("0"+now.getSeconds()).slice(-2);
        badge.textContent="✓ Đã lưu lúc "+timeStr;
        badge.style.opacity="1";
      }
    } catch(err){
      console.warn("LocalStorage save failed:", err);
    }
  }, 400);
}

function buildState(){
  var o={_v:4,_at:new Date().toISOString(),tasks:tasks,uid:uid,f:{},
    rows:{req:reqT.count(),hotels:hotelT.count(),notes:noteT.count()}};
  document.querySelectorAll("[data-k]").forEach(function(n){
    o.f[n.getAttribute("data-k")]=(n.type==="checkbox")?n.checked:n.value;
  });
  return o;
}

function applyState(o){
  if(o.tasks){tasks=o.tasks;uid=o.uid||tasks.length}
  var r=o.rows||{};
  while(reqT.count()<(r.req||0))reqT.add();
  while(hotelT.count()<(r.hotels||0))hotelT.add();
  while(noteT.count()<(r.notes||0))noteT.add();
  if(o.f)Object.keys(o.f).forEach(function(k){
    var n=document.querySelector('[data-k="'+k.replace(/"/g,'\\"')+'"]');
    if(!n)return;
    if(n.type==="checkbox")n.checked=!!o.f[k];else n.value=o.f[k];
    if(n.tagName==="SELECT")n.dispatchEvent(new Event("change"));
  });
  var gv=$("#gvInput").value;if(gv)calRef=parse(gv);
  updateClientTitle();
  refresh();
}

/* ---------- Save / Load HTML & Print ---------- */
$("#save").onclick = async function() {
  var state = buildState();
  var stateJson = JSON.stringify(state, null, 2);
  var htmlContent = "";

  try {
    var respHtml = await fetch("/PhanMemKeHoach_Offline.html");
    if (respHtml.ok) {
      var template = await respHtml.text();
      var injectStr = '<script id="SAVED_APP_STATE" type="application/json">\n' + stateJson + '\n<\/script>';
      if (template.indexOf('id="SAVED_APP_STATE"') >= 0) {
        template = template.replace(/<script id="SAVED_APP_STATE"[\s\S]*?<\/script>/, injectStr);
      } else {
        template = template.replace('</body>', injectStr + '\n</body>');
      }
      htmlContent = template;
    }
  } catch (err) {
    console.log("Fetch offline template failed, fallback to cloning document:", err);
  }

  if (!htmlContent) {
    var docClone = document.documentElement.cloneNode(true);
    var existingState = docClone.querySelector("#SAVED_APP_STATE");
    if (existingState) existingState.remove();
    var sTag = document.createElement("script");
    sTag.id = "SAVED_APP_STATE";
    sTag.type = "application/json";
    sTag.textContent = stateJson;
    docClone.querySelector("body").appendChild(sTag);
    htmlContent = "<!DOCTYPE html>\n<html lang=\"vi\">\n" + docClone.innerHTML + "\n</html>";
  }

  var b = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
  var a = el("a");
  a.href = URL.createObjectURL(b);
  var clientName = ($('[data-k="client"]').value || "khach-hang").trim().replace(/\s+/g, "-").toLowerCase();
  a.download = "onboarding-" + clientName + ".html";
  document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 200);
};

$("#load").onclick = function() { $("#file").click(); };
$("#file").onchange = function(e) {
  var f = e.target.files && e.target.files[0];
  if (!f) return;
  var rd = new FileReader();
  rd.onload = function() {
    var text = rd.result;
    try {
      var stateObj = null;
      var trimmed = text.trim();
      if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
        stateObj = JSON.parse(trimmed);
      } else {
        var match = text.match(/<script id="SAVED_APP_STATE"[^>]*>([\s\S]*?)<\/script>/);
        if (match && match[1]) {
          stateObj = JSON.parse(match[1].trim());
        } else {
          var stateMatch = text.match(/"tasks"\s*:\s*\[[\s\S]*?\],\s*"uid"/);
          if (stateMatch) {
            var startIdx = text.lastIndexOf("{", stateMatch.index);
            var endIdx = text.indexOf("}}", stateMatch.index) + 2;
            stateObj = JSON.parse(text.slice(startIdx, endIdx));
          }
        }
      }

      if (stateObj) {
        applyState(stateObj);
        autoSave();
        alert("Đã khôi phục dữ liệu từ file HTML thành công!");
      } else {
        alert("Không tìm thấy dữ liệu hợp lệ trong file HTML này.");
      }
    } catch (x) {
      alert("File không đọc được hoặc cấu trúc không hợp lệ: " + x.message);
    }
  };
  rd.readAsText(f);
  e.target.value = "";
};

var printBtn = $("#printBtn");
if (printBtn) {
  printBtn.onclick = function() {
    window.print();
  };
}

/* ---------- Init & Restore ---------- */
seed();

var embeddedStateTag = document.getElementById("SAVED_APP_STATE");
var embeddedLoaded = false;
if (embeddedStateTag && embeddedStateTag.textContent.trim()) {
  try {
    var embeddedState = JSON.parse(embeddedStateTag.textContent);
    applyState(embeddedState);
    embeddedLoaded = true;
  } catch (e) {
    console.error("Error loading embedded state:", e);
  }
}

if (!embeddedLoaded) {
  var savedLocal = null;
  try {
    savedLocal = localStorage.getItem("xperise_onboarding_state");
  } catch (e) {}

  if (savedLocal) {
    try {
      var parsed = JSON.parse(savedLocal);
      applyState(parsed);
    } catch (e) {
      var _gv = $("#gvInput").value; if (_gv) calRef = parse(_gv);
      refresh();
    }
  } else {
    var _gv2 = $("#gvInput").value; if (_gv2) calRef = parse(_gv2);
    refresh();
  }
}

document.addEventListener("input", function(e) {
  if (e.target.hasAttribute("data-k")) autoSave();
});
document.addEventListener("change", function(e) {
  if (e.target.hasAttribute("data-k")) autoSave();
});

})();
