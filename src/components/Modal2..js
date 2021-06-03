import React from "react";

const Modal2 = () => {
    return (
        // <!-- Modal -->

        <div class="modal fade" id="SignIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    
            <div class="modal-dialog" role="document">
    
                <div class="modal-content">
    
                    <div class="modal-header">
    
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    
                        <h4 class="modal-title text-center" id="myModalLabel">Sign In</h4>
    
                    </div>
    
                    <div class="modal-body">
    
                        <form class="signup-form">
    
                            <div class="form-group">
    
                                <input type="text" class="form-control" placeholder="User Name" required="required"/>
    
                            </div>
    
                            <div class="form-group">
    
                                <input type="text" class="form-control" placeholder="Password" required="required"/>
    
                            </div>
    
                            <div class="form-group text-center">
    
                                <button type="submit" class="btn btn-blue btn-block">Log In</button>
    
                            </div>
    
                        </form>
    
                    </div>
    
                    <div class="modal-footer text-center">
    
                        <a href="#">Forgot your password /</a>
    
                        <a href="#">Signup</a>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    )
}

export default Modal2;