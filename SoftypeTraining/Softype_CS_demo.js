    /**
     *@NApiVersion 2.x
    *@NScriptType ClientScript
    */
    
    
    /***************************************************************************************
    ** Copyright (c) 1998-2021 Softype, Inc.
    ** All Rights Reserved.
    ** This software is the confidential and proprietary information of Softype, Inc. (&quot;Confidential
    Information&quot;).
    **You shall not disclose such Confidential Information and shall use it only in accordance with
    the terms of the license agreement you entered into with Softype.
    **
    **@Author : Grace laborada
    **@Dated : 27 January 2021
    **@Version : 2.0
    **@Description : Client Script deployed on Purchase order which will calculate discounts.
    ***************************************************************************************************************/

    define(['N/record'],

        function(record) {

            function pageInit() {
                alert('Hello world');
                
            }
            function saveRecord(){
                alert('saving record');
            }
            function validateField(){
                // if(name == 'otherrefnum'){
                //     var vendor = record.getValue('otherrefnum');
                //     alert('validating field of ' + name + vendor);
                //     return true;
                // }
                //var vendor = record.getValue;
                alert('validating field');
            }
            function fieldChanged(){
                alert('field changed');
            }
            function postSourcing(){
                alert('post sourcing');
            }
            function lineInit(){
                alert('line init');
            }
            function validateLine(){
                alert('line validated');
            }
            function recalc(){
                alert('recalc testing');
            }
            function validateInsert(){
                alert('validate insert testing');
            }
            function validateDelete(){
                alert('validate delete testing');
            }
            return {
                pageInit: pageInit,
                saveRecord : saveRecord,
                validateField: validateField,
                fieldChanged: fieldChanged,
                postSourcing: postSourcing,
                lineInit: lineInit,
                validateLine: validateLine,
                recalc: recalc,
                validateInsert: validateInsert,
                validateDelete: validateDelete

            };
        });